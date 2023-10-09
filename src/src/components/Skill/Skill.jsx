import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import { SkillContents } from "../contents/Contents";

const skillContents = SkillContents;
const getSkillContents = (type) => {
  const resultContents = [];
  for (let i = 0; i < skillContents.length; i++) {
    skillContents[i].id === type && resultContents.push(skillContents[i]);
  }
  return resultContents;
};
export const SkillTable = (props) => {
  return (
    <>
      <Typography variant="h6" color="primary">
        {props.id === "front" && "フロントエンド"}
        {props.id === "back" && "バックエンド"}
        {props.id === "other" && "その他"}
      </Typography>
      <Table sx={{ minWidth: "700" }}>
        <TableHead>
          <TableRow>
            <TableCell width="15%">技術要素</TableCell>
            <TableCell width="15%">レベル</TableCell>
            <TableCell width="70%">説明</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {getSkillContents(props.id).map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.tech}</TableCell>
              <TableCell>
                <Rating defaultValue={row.level} max={3} readOnly />
              </TableCell>
              <TableCell>{row.explain}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};
