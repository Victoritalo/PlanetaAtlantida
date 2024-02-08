import { createSlice } from "@reduxjs/toolkit";
import { Atracao } from "../../models/atracao.model";

const state: Atracao[] = [
  {
    id: "83544377-bd90-4c8e-b226-454b2d1b5f0a",
    nome: "Fresno",
    descricao:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    likes: 0,
    dislikes: 0,
    horario: "18:00",
    fotoUrl:
      "https://s3.wasabisys.com/images.planetaatlantida.com.br/2024/lineup/fresno/main.png",
  },
  {
    id: "83544377-bx90-4c8e-b226-454b2d1b5f0a",
    nome: "Veigh",
    descricao:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    likes: 0,
    dislikes: 0,
    horario: "18:00",
    fotoUrl:
      "https://s3.wasabisys.com/images.planetaatlantida.com.br/2024/lineup/home/polaroid-veigh.png",
  },
  {
    id: "83574377-bx90-4c8e-b226-454b2d1b5f0a",
    nome: "Vitor Kley",
    descricao:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    likes: 0,
    dislikes: 0,
    horario: "18:00",
    fotoUrl:
      "https://s3.wasabisys.com/images.planetaatlantida.com.br/2024/lineup/home/polaroid-vitor-kley.png",
  },
  {
    id: "83577377-bx90-4c8e-b226-454b2d1b5f0a",
    nome: "Gabriel Pensador",
    descricao:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    likes: 0,
    dislikes: 0,
    horario: "18:00",
    fotoUrl:
      "https://s3.wasabisys.com/images.planetaatlantida.com.br/2024/lineup/home/polaroid-gabrielopensador.png",
  },
  {
    id: "83567877-bx90-4c8e-b226-454b2d1b5f0a",
    nome: "Papas da Língua",
    descricao: "lorem",
    likes: 0,
    dislikes: 0,
    horario: "18:00",
    fotoUrl:
      "https://s3.wasabisys.com/images.planetaatlantida.com.br/2024/lineup/home/polaroid-papasnalingua.png",
  },
];

const atracoesSlice = createSlice({
  name: "atracoes",
  initialState: state,
  //   initialState: state as Atracao[],
  reducers: {},
});

export default atracoesSlice.reducer;
