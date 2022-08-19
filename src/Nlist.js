import React, { useState } from "react";
import Button from "@mui/material/Button";
import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Snackbar,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";

function Nlist() {
  const [nlist, setnlist] = useState(["suraj", "niraj"]);
  const [value, setValue] = useState("");
  const [open, setOpen] = useState(false);
  const [dialogopen, setDialogOpen] = useState(false);
  const handleAdd = () => {
    if (value !== "") setnlist([...nlist, value]);
    else alert("Enter a value");

    setValue("");
    setDialogOpen(false)
  };
  const handleDelete = (i) => {
    console.log(i);
    const list = nlist.filter((item, id) => id !== i);
    setnlist(list);
    setOpen(true);

    // setTimeout(() => {
    //   setOpen(false);
    // }, );
  };
  const handleClose = () => {
      setOpen(false);
  };
  return (
    <div className="list">
      <Box>
        <List>
          {nlist &&
            nlist.map((item, i) => {
              return (
                <ListItem key={i}>
                  <ListItemText primary={item} />
                  <Tooltip title="delete" placement="right">
                    <IconButton onClick={() => handleDelete(i)}>
                      <DeleteIcon />
                    </IconButton>
                  </Tooltip>
                  <Snackbar
                    message="Deleted Successfully!"
                    autoHideDuration={3000}
                    open={open}
                    onClose={handleClose}
                  />
                </ListItem>
              );
            })}
        </List>

        <Button sx={{ border: 2, margin: 2 }} onClick={()=>setDialogOpen(true)} size="small">
          ADD
        </Button>
        <Dialog
        open={dialogopen}
        onClose={()=> setOpen(false)}>
          <DialogTitle>ADD ITEM TO THE LIST</DialogTitle>
          <DialogContent>
            <TextField
              sx={{ width: 0.8, alignSelf: "center" }}
              label="Required"
              helperText="Add only names to the list"
              size="small"
              required
              id="outlined-required"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              autoComplete="off"
            ></TextField>
          </DialogContent>
          <DialogActions>
            <Button
              sx={{ border: 2, margin: 2 }}
              onClick={handleAdd}
              size="small"
            >
              ADD
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </div>
  );
}

export default Nlist;
