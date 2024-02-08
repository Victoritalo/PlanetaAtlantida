import { Container } from "@mui/material";
import { CardAtracao } from "./components/CardAtracao";
import { Header } from "./components/Header";
import { Atracao } from "./models/atracao.model";
import Grid from "@mui/material/Grid";
import { useAppSelector } from "./config/hooks";

export function Root() {
  const atracoes = useAppSelector((state) => state.atracoes);

  return (
    <>
      <Header />
      <Container>
        <h1>LineUp</h1>
        <Grid container>
          {atracoes.map((item) => (
            <Grid item xs={12} sm={4} md={3} xl={1}>
              <CardAtracao atracao={item} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}
