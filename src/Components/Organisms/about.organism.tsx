import { Grid } from "@mui/material";
import MoleculeTextField from "../Molecules/TextField";

export default function AboutText() {
  const text = "Sou formando de Engenharia da Computação e um desenvolvedor de software com 4 anos de experiência, tenho experiência em projetos que abrangem diversas áreas da tecnologia. Ao longo da minha carreira, tive a oportunidade de atuar em data science e inteligência artificial. Atualmente trabalho com desenvolvimento fullstack de sistemas voltados para a Indústria 4.0, onde aplico minhas habilidades para criar soluções inovadoras que integram IoT, automação e análise de dados em ambientes industriais. Minha paixão pela tecnologia e meu compromisso com a entrega de resultados me impulsionam a buscar sempre a excelência em cada projeto em que me envolvo."
    return (
    <Grid container justifyContent={"center"}>
      <Grid item xs={6}>
        <MoleculeTextField
          title={{
            value: "Sobre",
            className: "MinorEmphasis",
          }}
          text={{
            value: text,
            className: "",
          }}
        />
      </Grid>
    </Grid>
  );
}
