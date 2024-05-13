import React, {useState} from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import theme from "./Theme/Theme"
import IconButton, { iconButtonClasses } from '@mui/material/IconButton';
import SendIcon from '@mui/icons-material/Send';
import DeleteIcon from '@mui/icons-material/Delete';



function Comment({selectedUser, selectedAvatar}) {

  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const handleCommentChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleSendComment = () => {
    if (newComment.trim() !== '') {
      const newCommentObj = {
        id: comments.length + 1,
        text: newComment,
      };
      setComments([...comments, newCommentObj]);
      setNewComment('');
    }
  };

  const handleDeleteComment = (commentId) => {
    const updatedComments = comments.filter(comment => comment.id !== commentId);
    setComments(updatedComments);
  };


  return (
    <ThemeProvider theme={theme}>
      <Box mt="15px">
        <Grid container direction="column" justifyContent='flex-end'>

          <Grid item>
            <Typography color="text.primary" fontStyle="italic" fontWeight="bold" mb="15px">Comments</Typography>
          </Grid>

          {comments.map(comment => (
            <Grid key={comment.id} item container mb="6px">
              <Grid item container justifyContent="flex-start" direction="row" alignItems="flex-start">

                <Grid item xs={1}>
                  <Avatar sx={{ width: 30, height: 30 }}></Avatar>
                </Grid>

                <Grid item sx={{ml:"8px"}} xs={9}>
                  <Typography fontWeight="bold" color="#009379">{selectedUser}</Typography>
                  <Typography sx={{ marginTop: '-8px' }}>{comment.text}</Typography>
                </Grid>

                <Grid item xs={1}>
                  <IconButton onClick={() => handleDeleteComment(comment.id)}>
                    <DeleteIcon fontSize='small' sx={{color:"#F28482"}}/>
                  </IconButton>
                </Grid>
                
              </Grid>
            </Grid>
          ))}

          <Grid item container spacing={1} direction="row" alignItems="center" justifyContent="flex-end" mt="15px">
            <Grid item>
              < Avatar sx={{ width: 30, height: 30 }}></Avatar>
            </Grid>
            
            <Grid item>
              <TextField variant="outlined" onChange={handleCommentChange} placeholder="Write a comment..." fullWidth
              InputProps={{
                sx: {borderRadius: '50px',width:"280px", height: '44px', },
                endAdornment: ( <IconButton onClick={handleSendComment}><SendIcon sx={{color:"#F28482"}}/></IconButton> ), 
              }} />
            </Grid>
          </Grid>
            
        </Grid>
      </Box>
    </ThemeProvider>
    
  )
}

export default Comment


