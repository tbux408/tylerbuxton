import React, { useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import styles from "../styles/Card.module.css";
import TitleIcon from "@mui/icons-material/Title";

function Card({ title, pic, description }) {
  const theme = useTheme();
  const [color, setColor] = useState(theme.palette.secondary.main);
  return (
    <div className={styles["container"]}>
      {title}
      <div className={styles["box"]}>{pic}</div>
      {description}
    </div>
  );
}

export default Card;
