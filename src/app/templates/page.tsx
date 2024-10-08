"use client";
import * as React from "react";
import { styled } from "@mui/material/styles";
import { Grid2 as Grid, Paper, Box } from "@mui/material";
import { templates } from "@/utils";
import { SingleTemplate } from "@/appStore/interface/interface.model";
import Link from "next/link";

const Item = styled(Paper)(({ theme }) => ({
  height: "18rem",
  backgroundColor: "#fff",
  "&:hover": { backgroundColor: "#f5f8fa" },
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

export default function Templates() {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        paddingTop: "5rem",
      }}
    >
      <Box sx={{ width: "40%" }}>
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {templates.map((template: SingleTemplate) => {
            return (
              <Grid size={6} key={template.id}>
                <Link href={`/email-editor/${template.id}`}>
                  <Item>{template.id}</Item>
                </Link>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
}
