import {
  Box,
  FormControlLabel,
  Checkbox,
  FormControl,
  FormLabel,
  FormGroup,
} from "@mui/material";
import React, { useState } from "react";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

export const MuiCheckcbos = () => {
  const [aceptado, setAceptado] = useState(false);
  const [skills, setSkills] = useState([]);
  console.log(skills);

  const handleAcept = (e) => {
    setAceptado(e.target.checked);
  };
  const handleSkills = (e) => {
    const index = skills.indexOf(e.target.value);
    if (index === -1) {
      setSkills([...skills, e.target.value]);
    } else {
      setSkills(skills.filter((skill) => skill !== e.target.value));
    }
  };
  return (
    <Box>
      <Box>
        <FormControlLabel
          label="Acepto terminos y condiciones"
          control={<Checkbox checked={aceptado} onChange={handleAcept} />}
        />
      </Box>
      <Box>
        <Checkbox
          icon={<BookmarkBorderIcon />}
          checked={aceptado}
          checkedIcon={<BookmarkIcon />}
          onChange={handleAcept}
        />
      </Box>
      <FormControl>
        <FormLabel> Skills</FormLabel>
        <FormGroup>
          <FormControlLabel
            label="Html"
            value="html"
            control={
              <Checkbox
                checked={skills.includes("html")}
                onChange={handleSkills}
              />
            }
          />
          <FormControlLabel
            label="Javascript"
            value="javascript"
            control={
              <Checkbox
                checked={skills.includes("javascript")}
                onChange={handleSkills}
              />
            }
          />
          <FormControlLabel
            label="Css"
            value="css"
            control={
              <Checkbox
                checked={skills.includes("css")}
                onChange={handleSkills}
              />
            }
          />
        </FormGroup>
      </FormControl>
    </Box>
  );
};
