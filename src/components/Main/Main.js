import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import { deepOrange, deepPurple } from '@material-ui/core/colors';


const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      marginTop:'20px',
      marginLeft: '20px',
      marginRight: '20px'
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    avatar: {
        margin: 10,
        height: 150,
        width: 150,
        marginLeft: 'auto',
        marginRight: 'auto',
      },
      orangeAvatar: {
        margin: 10,
        color: '#fff',
        height: 150,
        width: 150,
        marginLeft: 'auto',
        marginRight: 'auto',
        backgroundColor: deepOrange[500],
      },
      purpleAvatar: {
        margin: 10,
        color: '#fff',
        height: 150,
        width: 150,
        marginLeft: 'auto',
        marginRight: 'auto',
        backgroundColor: deepPurple[500],
      },
    
  }));

const Main = (props) =>{
    const classes = useStyles();
    
    return (
        <div className={classes.root}>
                <Grid container spacing={3}>
    
                    <Grid item xs={9}>
                        <Paper className={classes.paper}>
                            <Grid container spacing={3} style={{float:'center'}}>
                                <Grid item xs={4}>
                                    <Avatar className={classes.orangeAvatar}>TimeSheet</Avatar>
                                </Grid>
                                <Grid item xs={4}>
                                    <Avatar className={classes.avatar}>SQCDP</Avatar>
                                </Grid>
                                <Grid item xs={4}>
                                    <Avatar className={classes.purpleAvatar}>Digital Wall</Avatar>                                  
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