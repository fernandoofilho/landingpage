import { Grid } from "@mui/material";
import Skill from "../Molecules/skill.molecule";

import c from "../../assets/tools/C_Programming_Language.svg";
import cpp from "../../assets/tools/ISO_C++_Logo.svg";
import angular from "../../assets/tools/angular-icon-svgrepo-com.svg";
import csharp from "../../assets/tools/c--4.svg";
import css from "../../assets/tools/css-3-svgrepo-com.svg";
import django from "../../assets/tools/djangoproject-svgrepo-com.svg";
import dotnet from "../../assets/tools/dotnet-svgrepo-com.svg";
import git from "../../assets/tools/git-svgrepo-com.svg";
import js from "../../assets/tools/javascript-svgrepo-com.svg";
import keras from "../../assets/tools/keras-svgrepo-com.svg";
import mongo from "../../assets/tools/mongo-svgrepo-com.svg";
import node from "../../assets/tools/node-svgrepo-com.svg";
import html from "../../assets/tools/html-5-svgrepo-com.svg";
import opencv from "../../assets/tools/opencv-svgrepo-com.svg";
import pandas from "../../assets/tools/pandas-svgrepo-com.svg";
import postgres from "../../assets/tools/postgresql-svgrepo-com.svg";
import python from "../../assets/tools/python-svgrepo-com.svg";
import pytorch from "../../assets/tools/pytorch-svgrepo-com.svg";
import sqlite from "../../assets/tools/sqlite-svgrepo-com.svg";
import styledComp from "../../assets/tools/styled-components-svgrepo-com.svg";
import tensorflow from "../../assets/tools/tensorflow-svgrepo-com.svg";
import typescript from "../../assets/tools/typescript-svgrepo-com.svg";
import ubuntu from "../../assets/tools/ubuntu-svgrepo-com.svg";
import reactIcon from "../../assets/tools/logo192.png";
import { Content } from "../Atoms/labels.atom";
interface Iprops {}

export default function Skills(props: Iprops) {
  return (
    <Grid container direction={"column"} marginTop={5}>
      <Grid container justifyContent={"center"} marginBottom={5}>
        <Content className="Emphasis"> My Skills</Content>
      </Grid>
      <Grid container direction={"row"} justifyContent={"center"}>
        <Skill src={reactIcon} name="React" />
        <Skill src={angular} name="Angular" />
        <Skill src={styledComp} name="Styled" />
      </Grid>

      <Grid container direction={"row"} justifyContent={"center"}>
        <Skill src={css} name="css" />
        <Skill src={js} name="javascript" />
        <Skill src={html} name="html" />
      </Grid>

      <Grid container direction={"row"} justifyContent={"center"}>
        <Skill src={django} name="" />
        <Skill src={node} name="node" />
        <Skill src={typescript} name="typescript" />
      </Grid>

      <Grid container direction={"row"} justifyContent={"center"}>
        <Skill src={cpp} name="c++" />
        <Skill src={csharp} name="C#" />
        <Skill src={dotnet} name=".NET" />
      </Grid>

      <Grid container direction={"row"} justifyContent={"center"}>
        <Skill src={sqlite} name="Sqlite" />
        <Skill src={mongo} name="Mongo" />
        <Skill src={postgres} name="Postgresql" />
      </Grid>

      <Grid container direction={"row"} justifyContent={"center"}>
        <Skill src={git} name="Git" />
        <Skill src={python} name="Python" />
        <Skill src={ubuntu} name="Ubuntu" />
      </Grid>

      <Grid container direction={"row"} justifyContent={"center"}>
        <Skill src={keras} name="Keras" />
        <Skill src={opencv} name="Opencv" />
        <Skill src={pandas} name="Pandas" />
      </Grid>

      <Grid container direction={"row"} justifyContent={"center"}>
        <Skill src={pytorch} name="Pytorch" />
        <Skill src={tensorflow} name="Tensorflow" />
      </Grid>
    </Grid>
  );
}
