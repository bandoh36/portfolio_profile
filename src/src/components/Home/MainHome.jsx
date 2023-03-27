import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Profile from "./Profile";
import { ProfileContents } from "../contents/Contents";

const MainHome = (props) => {
  return (
    /* 幅変化指定 上下marginの指定 */
    <Container maxWidth="lg" sx={{ mt: 5 }}>
      {/* 自己紹介 */}
      <Profile post={ProfileContents} />
      {/* 各ページリンク */}
      <Grid container mt={0} spacing={3}>
        <Grid item xs="12" md="6" lg="6">
          <Paper
            sx={{
              p: 2,
              height: 120,

              boxShadow: "6",
            }}
          >
            <Typography variant="h6" color="primary">
              転職を考えた経緯
              <br />
              <Button
                color="secondary"
                onClick={() => props.setDisplayContents("History")}
                sx={{ mt: 3 }}
              >
                &gt;&gt;詳しく見る
              </Button>
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs="12" md="6" lg="6">
          <Paper
            sx={{
              p: 2,
              height: 120,
              boxShadow: "6",
            }}
          >
            <Typography variant="h6" color="primary">
              スキルセット
              <br />
              <Button
                color="secondary"
                onClick={() => props.setDisplayContents("Skill")}
                sx={{ mt: 3 }}
              >
                &gt;&gt;詳しく見る
              </Button>
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default MainHome;
