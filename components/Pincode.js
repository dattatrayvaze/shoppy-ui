import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import {IoLocationSharp} from "react-icons/io5";
import './Pincode.css';

function Pincode() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant= 'text' onClick={handleClickOpen} className="pin">
        <div><IoLocationSharp className='loc'/></div>
        
      </Button>
      <p className='txt'>Shops near by</p>
      <Dialog open={open} onClose={handleClose}>
        {/* <DialogTitle>Subscribe</DialogTitle> */}
        <DialogContent>
          <DialogContentText style={{color:"black"}}>
            Enter Pincode
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Pincode"
            type="pincode"
            fullWidth
            variant="outlined"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Confirm</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Pincode;