import { Typography } from "@mui/material";
import React from "react";

export const Tipografia = () => {
  return (
    <div>
      <Typography variant="h1">h1 Titulo</Typography>
      <Typography variant="h2">h2 Titulo</Typography>
      <Typography variant="h3">h3 Titulo</Typography>
      <Typography variant="h4">h4 Titulo</Typography>
      <Typography variant="h5">h5 Titulo</Typography>
      <Typography variant="h6">h6 Titulo</Typography>
      <Typography variant="subtitle1">Subtitulo 1</Typography>
      <Typography variant="subtitle2">Subtitulo 2</Typography>
      <Typography variant="body1" gutterBottom>
        Texto parrafo 1 Lorem ipsum dolor sit amet, consectetur adipisicing
        elit. Nostrum molestiae neque nemo ducimus ad adipisci perspiciatis enim
        dolorum minus odio dignissimos hic nihil autem, porro est, eos facere.
        Alias, ut!
      </Typography>
      <Typography variant="body2">
        Texto parrafo 2 Lorem, ipsum dolor sit amet consectetur adipisicing
        elit. Architecto soluta doloribus voluptatibus est, illo asperiores
        inventore vitae? Provident dolorum quam inventore velit architecto at
        iusto asperiores consectetur, laudantium vel repellendus.
      </Typography>
      //component: etiqueta de componente //variant : clase //gutterBottom:
      margin bottom
    </div>
  );
};
