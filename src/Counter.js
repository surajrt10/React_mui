import React, { useState, useEffect } from "react";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Grid } from "@mui/material";
function Counter() {
  useEffect(() => {
    console.log("render");
  }, []);
  const [Count, setCount] = useState(0);

  const increment = () => {
    setCount(Count + 1);
  };

  const decrement = () => {
    setCount(Count - 1);
  };
  return (
    <Grid
  container
  spacing={0}
  direction="row"
  justifyContent="center"
  
>
      <span className="counter" onClick={decrement}>
        <RemoveIcon/>
      </span>
      <span className="counter">{Count}</span>
      <span className="counter" onClick={increment}>
      <AddIcon />
      </span>
    </Grid>
  );
}

export default Counter;
