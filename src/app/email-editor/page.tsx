"use client";
import { firstTemplate } from "../../utils";
import { setSelectedTemplate } from "../../appStore/cardsSlice";
import { useEffect } from "react";
import Editor from "../components/editor";
import Preview from "../components/preview";
import { Box, Divider } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Template } from "../../appStore/interface/interface.model";
import {RootSate} from '../../appStore/store'

function EmailEditor() {
  const dispatch = useDispatch();
  const selectedTemplate: Template | null = useSelector(
    (state: RootSate) => state.cardsReducer.selectedTemplate
  );

  useEffect(() => {
    dispatch(setSelectedTemplate(firstTemplate));
  }, []);

  return (
    <>
      {selectedTemplate && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
          }}
        >
          <Editor />
          <Divider
            orientation="vertical"
            flexItem
            sx={{ borderRight: "2px solid #545454" }}
          />
          <Preview />
        </Box>
      )}
    </>
  );
}

export default EmailEditor;
