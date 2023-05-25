import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import { useState } from "react";
import { TextField } from "@mui/material";
import { Popover } from "@mui/material";
import { Avatar } from "@mui/material";
import LogoutIcon from '@mui/icons-material/Logout';

export const Apple = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [open, setOpen] = useState(false);
    const [anchorE1, setAnchorE1] = useState(null);
    const Navigate = useNavigate();

    const onHomePageButtonClick = () => {
        Navigate("/");
        console.log("Name: ", name);
        console.log("Email: ", email);
    };

    const handleClick = (event) => {
        console.log(123);
        setAnchorE1(event.currentTarget);
        setOpen(true);
    };

    const handleClose = () => {
        setAnchorE1(null);
        setOpen(false);
    };
    return (
        <div style={{
            padding: 5
        }}>
            {/* <h1>Apple</h1> */}
            <div
                style={{
                display: 'flex',
                justifyContent: 'flex-end'
            }}
            >
                <div onClick={handleClick}
                style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    padding:5,
                    alignItems: 'center',
                    columnGap: 5
                }}>
                    <Avatar sx={{bgcolor: "#526D82"}}>DJ</Avatar>
                </div>
                
            </div>

            <div
                style={{
                padding: 10,
                rowGap: 10,
                display: 'flex',
                flexDirection: 'column'
            }}>
                <TextField
                    type="text"
                    value={name}
                    label="Name"
                    color="secondary"
                    onChange={(e) => setName(e.target.value)}/>
                <TextField
                    type="email"
                    value={email}
                    label="Email"
                    color="secondary"
                    onChange={(e) => setEmail(e.target.value)}/>
                <Button variant="contained"className="button" onClick={onHomePageButtonClick}>Submit</Button>
            </div>
            <Popover
                open={open}
                anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left'
            }}
                transformOrigin={{
                vertical: 'top',
                horizontal: 'left'
            }}
            anchorEl={anchorE1}
            onClose={handleClose}
            >
                <div
                style={{
                    padding:5, 
                    Margin:5,
                    alignItems: 'center'
                }}
                >
                    <h3>Darshan Jhagadiawala <LogoutIcon onClick={onHomePageButtonClick}/></h3>
                    
                </div>
            </Popover>
        </div>
    );
};