import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import './LogIn.css';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';



const useStyles = makeStyles(theme => ({
    root: {
      padding: theme.spacing(0, 3),
      marginLeft : '50px',
      marginTop: '100px',
      width: '30%',
      verticalAlign:'middle',
      backgroundColor: 'rgba(1,1,1,0.1)',
      border: '2px solid white'
    },
    card: {
        padding: theme.spacing(0, 3),
        marginLeft : '50px',
        marginTop: '10px',
        width: '30%',
        backgroundColor: 'rgba(1,1,1,0.1)',
        border: '2px solid white'
      },
      container: {
        display: 'flex',
        flexWrap: 'wrap',
      },
      textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: '100%',
      },
      button: {
        margin: theme.spacing(1),
        marginTop:'20px',
        marginLeft:'auto',
        marginRight:'right'
      },
  }));

export default function LogIn() {
    const classes = useStyles();
    return (
    <div className="">
    <Paper className={classes.root}>
        <div className="abc">
          
                <Typography component="div">
                <h1 style = {{paddingTop :'0px',display: 'inline',color: '#10069f',fontSize :'60px'}}>R<sup>2</sup> </h1>      
                </Typography>
            
                <Typography component="div" className="dataLabsTitle" style = {{marginLeft : '15px'}}>
                    <div className="data"> Data</div>   
                    <div className="labs">Labs</div>  
                </Typography>

                <Typography component="div" style={{margin :'auto',color:'#10069f'}}>
                   <h1>Here You Go!</h1>
                </Typography>         
        </div>      
    </Paper>

    <Card className ={classes.card}>
    

        <CardContent>
            <Typography variant="h3" component="h2" style={{color:'#10069f'}}>
                Login
            </Typography>
            <form className={classes.container} noValidate autoComplete="off">
               
                    <TextField
                    id="standard-basic"
                    className={classes.textField}
                    label="Email/User Name"
                    margin="normal"
                    />
              
                    <TextField
                    id="standard-password-input"
                    label="Password"
                    className={classes.textField}
                    type="password"
                    autoComplete="current-password"
                    margin="normal"
                    />


                   <div>
                   <Button
                        variant="contained"
                        color="primary"
                        className={classes.button}>Login
                     </Button> 
                    </div>     
                       
                
            </form>
         </CardContent>

    </Card>
    </div>  


    );
}