import React,{useState} from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import PersonIcon from '@mui/icons-material/PersonOutlineOutlined';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from "@mui/material/FormControl";
import Avatar from '@mui/material/Avatar';
import theme from "./Theme/Theme"
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import { styled } from '@mui/material/styles';
import Comment from "./Comment"
import Divider from '@mui/material/Divider';
import StickyNote2Icon from '@mui/icons-material/StickyNote2';


const CustomDateTimePicker = styled(DateTimePicker)({
    '& .MuiInputBase-root': {
      borderRadius: '50px',
    },
  });



export default function User() {
    const [selectedUser, setSelectedUser] = useState('');
    const [selectedAvatar, setSelectedAvatar] = useState('');

    console.log(selectedUser)
    console.log(selectedAvatar)



    const handleChange = (event) => {
        const { value } = event.target;
        setSelectedUser(value);
        
        const avatars = {
            Yukkesh: 'https://s3-alpha-sig.figma.com/img/1099/2dd1/50bf7910cc579cb35352125504544458?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ecYuzGm1qsTlZ3EGTaEQgNsZeSLsRAOk7TyOsyt9IkhQFvH8Qg1cg0ex-UE0dvs~rKrTpCjP9rBiB6k0S453StdPwBq4DocNGSfk~bE6YaDciekQyXRBrxmndskwdlBlnBtiBM21TSVAZIxfjIg1Y6ZObOztQYCIOBk4F4betUZ3iQWRm0DugWjG8Xw0M0nSFqz0PzjP--4MZfN-nuMl7gzAjC7m~jSGY~9ThDcZ~oDXP0rzY1wwqlL6bGPm7QS1L1NN47Anfb5Yv0TxDDjuAr7-Q-3X2iarmh1OzpEFMTg6r9-ylYk958hpRXPbkWoZ18pw88S9~iolQh4cklVReA__',
            Madhesh: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        };
        setSelectedAvatar(avatars[value]);
    };


  return (
    <ThemeProvider theme={theme}>
    <Box mt="15px">
        <Grid container spacing={2}> 
            <Grid item>
                <TextField variant="outlined" InputProps={{sx: {borderRadius: '50px', width:"320px", height: '44px', color: '#E92C2C', fontSize: '25px', fontWeight:"bold" } }} />
                <LocalizationProvider dateAdapter={AdapterDayjs}> <DemoContainer components={['DateTimePicker']}> <CustomDateTimePicker TextFieldComponent={TextField}/> </DemoContainer> </LocalizationProvider>
            </Grid>

            <Grid item container alignItems="center" justifyContent="space-between">
                <PersonIcon fontSize="small" sx={{color:"#F28482"}}/>
                <Typography color="text.primary" fontStyle= 'italic'>Assign to:</Typography>
                

                <Box sx={{ minWidth: 200, borderRadius:"50px", display: ":flex", flexDirection:"row" }}>
                    <FormControl fullWidth>
                        <Select labelId="demo-simple-select-label" id="demo-simple-select" sx={{ display: 'flex', alignItems: 'center' }} value={selectedUser} placeholder='User' sx={{borderRadius:"50px"}} onChange={handleChange}>
                            <MenuItem value={"Yukkesh"} sx={{display:'flex', flexDirection:"row"}}> <Box display="flex" flexDirection="row"> <Avatar sx={{ width: 25, height: 25 }} src='https://s3-alpha-sig.figma.com/img/1099/2dd1/50bf7910cc579cb35352125504544458?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ecYuzGm1qsTlZ3EGTaEQgNsZeSLsRAOk7TyOsyt9IkhQFvH8Qg1cg0ex-UE0dvs~rKrTpCjP9rBiB6k0S453StdPwBq4DocNGSfk~bE6YaDciekQyXRBrxmndskwdlBlnBtiBM21TSVAZIxfjIg1Y6ZObOztQYCIOBk4F4betUZ3iQWRm0DugWjG8Xw0M0nSFqz0PzjP--4MZfN-nuMl7gzAjC7m~jSGY~9ThDcZ~oDXP0rzY1wwqlL6bGPm7QS1L1NN47Anfb5Yv0TxDDjuAr7-Q-3X2iarmh1OzpEFMTg6r9-ylYk958hpRXPbkWoZ18pw88S9~iolQh4cklVReA__'/> <Typography fontWeight="bold" color="#009379" ml="5px">Yukkesh</Typography></Box></MenuItem>
                            <MenuItem value={"Madhesh"}><Box display="flex" flexDirection="row"><Avatar sx={{ width: 25, height: 25 }} src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/><Typography fontWeight="bold" color="#009379" ml="5px">Madhesh</Typography></Box></MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </Grid>

            <Grid item container alignItems="flex-start" justifyContent="space-between">
                
                
                <StickyNote2Icon fontSize="small" sx={{color:"#F28482"}}/>
                <Typography color="text.primary" fontStyle= 'italic'>Note:</Typography>
                <TextField multiline variant="outlined" InputProps={{ sx: {fontSize:"14px",borderRadius: '15px', width:"200px"} }} />
                
            </Grid>
           
        </Grid>
        <Divider sx={{mt:"20px"}} />
        <Comment selectedUser={selectedUser} selectedAvatar={selectedAvatar}/>
    </Box>
    </ThemeProvider>
  )
}
