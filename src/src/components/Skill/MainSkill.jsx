import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { SkillTable } from "./Skill";

const MainSkill = () => {
  return (
    /* 幅変化指定 上下marginの指定 */
    <Container maxWidth="md" sx={{ mt: 3, mb: 3 }}>
      <Grid container spacing={5} sx={{ minWidth: "650px" }}>
        <Grid item xs={12}>
          <Paper
            sx={{
              p: 4,
              display: "flex",
              flexDirection: "column",
              boxShadow: "6",
            }}
          >
            <SkillTable id="front" />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper
            sx={{
              p: 4,
              display: "flex",
              flexDirection: "column",
              boxShadow: "6",
            }}
          >
            <SkillTable id="back" />
          </Paper>
        </Grid>
        {/* <Grid item xs={12}>
          <Paper
            sx={{
              p: 4,
              display: "flex",
              flexDirection: "column",
              boxShadow: "6",
            }}
          >
            <SkillTable id="other" />
          </Paper>
        </Grid> */}
      </Grid>
    </Container>
  );
};

export default MainSkill;
