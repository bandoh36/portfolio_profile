import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import MainSkill from "./components/Skill/MainSkill";
import MainHistory from "./components/History/MainHistory";
import MainHome from "./components/Home/MainHome";
import styled from "@emotion/styled";
import MuiAppBar from "@mui/material/AppBar";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import HomeIcon from "@mui/icons-material/Home";
import PsychologyAltIcon from "@mui/icons-material/PsychologyAlt";
import StarIcon from "@mui/icons-material/Star";
import WebIcon from "@mui/icons-material/Web";

//全体のテーマを作成 色を指定可能
const mdTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#0288d1",
      light: "#ffa2a3",
      dark: "#a34449",
    },
  },
});

const drawerWidth = 240;

const MainContent = styled("main", {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const Main = () => {
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const [displayContents, setDisplayContents] = React.useState("Home");
  const handleDisplayContents = React.useCallback((name) => {
    setDisplayContents(name);
  }, []);

  return (
    <ThemeProvider theme={mdTheme}>
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
        }}
      >
        <AppBar position="fixed" open={open}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              sx={{
                marginRight: "36px",
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              {/* AppBar表示名 */}
              {displayContents === "Home" && "ホーム"}
              {displayContents === "History" && "転職を考えた理由"}
              {displayContents === "Skill" && "スキルセット"}
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          variant="persistent"
          anchor="left"
          open={open}
        >
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List component="nav">
            {/* {mainListItems} */}
            <React.Fragment>
              <ListItemButton
                onClick={() => {
                  setDisplayContents("Home");
                  handleDrawerClose();
                }}
              >
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="ホーム" />
              </ListItemButton>
              <ListItemButton
                onClick={() => {
                  setDisplayContents("History");
                  handleDrawerClose();
                }}
              >
                <ListItemIcon>
                  <PsychologyAltIcon />
                </ListItemIcon>
                <ListItemText primary="転職を考えた理由" />
              </ListItemButton>
              <ListItemButton
                onClick={() => {
                  setDisplayContents("Skill");
                  handleDrawerClose();
                }}
              >
                <ListItemIcon>
                  <StarIcon />
                </ListItemIcon>
                <ListItemText primary="スキルセット" />
              </ListItemButton>
            </React.Fragment>
            <Divider sx={{ my: 1 }} />
            {/* {secondaryListItems} */}
            <React.Fragment>
              <ListSubheader component="div" inset>
                その他作成したサイト
              </ListSubheader>
              <ListItemButton target="_blank" href="https://akisute36.com">
                <ListItemIcon>
                  <WebIcon />
                </ListItemIcon>
                <ListItemText primary="Akisuteのブログ" />
              </ListItemButton>
            </React.Fragment>
          </List>
        </Drawer>
        {/* メイン画面表示 */}

        <MainContent
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
          open={open}
        >
          <Toolbar />
          {/* Home画面表示 */}
          {displayContents === "Home" && (
            <MainHome setDisplayContents={handleDisplayContents} />
          )}
          {/* History画面表示 */}
          {displayContents === "History" && <MainHistory />}
          {/* Skill画面表示 */}
          {displayContents === "Skill" && <MainSkill />}
        </MainContent>
      </Box>
    </ThemeProvider>
  );
};

const Dashboard = () => {
  return <Main />;
};

export default Dashboard;
