import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import ButtonBase from '@material-ui/core/ButtonBase';
import { deepOrange, deepPurple } from '@material-ui/core/colors';
import DoubleArrowOutlinedIcon from '@material-ui/icons/DoubleArrowOutlined';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import RecipeReviewCard from './card';


const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      marginTop:'50px',
      marginLeft: '20px',
      marginRight: '20px',
      verticalAlign: 'middle',
      
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      verticalAlign: 'middle',
      
    },
    avatar: {
        margin: 10,
        height: 100,
        width: 100,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '0px'
      },
      orangeAvatar: {
        margin: 10,
        color: '#fff',
        height: 100,
        width: 100,
        marginLeft: 'auto',
        marginRight: 'auto',
        backgroundColor: deepOrange[500],
        marginTop: '0px'
      },
      purpleAvatar: {
        margin: 10,
        color: '#fff',
        height: 100,
        width: 100,
        marginLeft: 'auto',
        marginRight: 'auto',
        backgroundColor: deepPurple[500],
        marginTop: '0px'
      },
    
  }));

const Main = (props) =>{
    const classes = useStyles();
    
    return (
        <div className={classes.root}>
                <Grid container spacing={3} direction="row"
  justify="center"
  alignItems="stretch">
    
                    <Grid item xs={9}>
                        <Paper className={classes.paper} style={{backgroundColor:'#eee'}}>
                            <Grid container spacing={3} style={{float:'center'}}>
                                <Grid item xs={4}>
                                    {/* <Avatar className={classes.orangeAvatar}>TimeSheet</Avatar> */}
                                   <Paper className={classes.paper} style={{backgroundColor:'#fff'}}>
                                   <Paper className={classes.paper}>
                                        <Grid container spacing={2}>
                                        <Grid item xs={6}>
                                            <ButtonBase className={classes.image}>
                                            <Avatar variant="rounded" className={classes.orangeAvatar}>TimeSheet</Avatar>
                                            </ButtonBase>
                                        </Grid>
                                        <Grid item xs={6} sm container style={{verticalAllign:'center',marginTop:'auto', marginBottom:'auto'}}>
                                                <Typography gutterBottom variant="subtitle1" style={{color:'#10069f'}}>
                                                    Enter 
                                                </Typography>
                                                <DoubleArrowOutlinedIcon style={{color:'#10069f'}}/>
                                           
                                        </Grid>
                                        </Grid>
                                    </Paper>

                                    <Paper className={classes.paper} style={{marginTop:'10px'}}>
                                        <Grid container spacing={2}>
                                        <Grid item xs={12}>
                                        <List component="nav" aria-label="secondary mailbox folders">
                                            <ListItem >
                                            <ListItemText primary="List Item 1" />
                                            </ListItem>
                                            <ListItem >
                                            <ListItemText primary="List Item 2" />
                                            </ListItem>
                                        </List>
                                        </Grid>
                                        
                                        </Grid>
                                    </Paper>
                                   </Paper>
                                </Grid>
                                <Grid item xs={4}>
                                    {/* <Avatar className={classes.avatar}>SQCDP</Avatar> */}
                                    <Paper className={classes.paper}>
                                        <Grid container spacing={2}>
                                        <Grid item>
                                            <ButtonBase className={classes.image}>
                                            <Avatar variant="rounded" className={classes.avatar}>SQCDP</Avatar>
                                            </ButtonBase>
                                        </Grid>
                                        <Grid item xs={12} sm container>
                                            <Grid item xs container direction="column" spacing={2}>
                                            <Grid item xs>
                                                <Typography gutterBottom variant="subtitle1">
                                                Standard license
                                                </Typography>
                                                <Typography variant="body2" gutterBottom>
                                                Full resolution 1920x1080 • JPEG
                                                </Typography>
                                                <Typography variant="body2" color="textSecondary">
                                                ID: 1030114
                                                </Typography>
                                            </Grid>
                                            <Grid item>
                                                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                                                Remove
                                                </Typography>
                                            </Grid>
                                            </Grid>
                                            <Grid item>
                                            <Typography variant="subtitle1">$19.00</Typography>
                                            </Grid>
                                        </Grid>
                                        </Grid>
                                    </Paper>
                                </Grid>
                                <Grid item xs={4}>
                                    <RecipeReviewCard/>                              
                                </Grid>
                            </Grid>               
                        </Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper className={classes.paper}>
                            <Typography variant="h3" component="h2" style={{color:'#10069f'}}>
                                Grid 2
                            </Typography>
                        </Paper>

                        <Paper className={classes.paper} style ={{marginTop: '10px'}}>
                            <Typography variant="h3" component="h2" style={{color:'#10069f'}}>
                                Grid 3
                            </Typography>
                        </Paper>
                    </Grid>

                </Grid>
        </div>
    );
}

export default Main;