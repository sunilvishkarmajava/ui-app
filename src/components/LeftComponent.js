import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing(3),
  },
}));

const LeftComponent = ({updateArray,capitalizeFirstWord, allstate}) =>{
  const classes = useStyles();

  return (
    <Paper square style={{'height':'850px',borderRadius:"10px"}}>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend" style={{textAlign:"left",paddingTop: "20px",paddingBottom: "20px",fontWeight: "700",fontSize: "23px",color: "black",letterSpacing: "1px"}}>Portugal</FormLabel>
        <FormGroup>
            {
              Object.entries(allstate.portugal).map(([key,value],i) => <FormControlLabel
              control={<Checkbox checked={value} color="primary" onChange={(evt) => updateArray(evt, "portugal")} name={key} />}
              label={capitalizeFirstWord(key.replace(/_/g, " "))}
              key={i}
            />)  
            }
        </FormGroup>
        <FormLabel component="legend" style={{textAlign:"left",paddingTop: "20px",paddingBottom: "20px",fontWeight: "700",fontSize: "23px",color: "black",letterSpacing: "1px"}}>Nicaragua</FormLabel>
        <FormGroup>
            {
              Object.entries(allstate.nicaragua).map(([key,value],i) => <FormControlLabel
              control={<Checkbox checked={value} color="primary" onChange={(evt) => updateArray(evt, "nicaragua")} name={key} />}
              label={capitalizeFirstWord(key.replace(/_/g, " "))}
              key={i}
            />)  
            }
        </FormGroup>
        <FormLabel component="legend" style={{textAlign:"left",paddingTop: "20px",paddingBottom: "20px",fontWeight: "700",fontSize: "23px",color: "black",letterSpacing: "1px"}}>Marshall islands</FormLabel>
        <FormGroup>
            {
              Object.entries(allstate.marshall_islands).map(([key,value],i) => <FormControlLabel
              control={<Checkbox checked={value} color="primary" onChange={(evt) => updateArray(evt, "marshall_islands")} name={key} />}
              label={capitalizeFirstWord(key.replace(/_/g, " "))}
              key={i}
            />)  
            }
        </FormGroup>
      </FormControl>
      
    </Paper>
  );
}

export default LeftComponent;