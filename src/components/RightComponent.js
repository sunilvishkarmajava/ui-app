import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing(3),
  },
}));




const RightComponent =  ({RemoveArraykey,capitalizeFirstWord, allstateRight}) => {
  const classes = useStyles();
  let showlabel = {
    portugal: false,
    nicaragua: false,
    marshall_islands: false
  };

  Object.values(allstateRight.portugal).forEach((item) =>{
    if(item){
      showlabel.portugal = true;
    }
  });
  Object.values(allstateRight.nicaragua).forEach((item) =>{
    if(item){
      showlabel.nicaragua = true;
    }
  });
  Object.values(allstateRight.marshall_islands).forEach((item) =>{
    if(item){
      showlabel.marshall_islands = true;
    }
  });


  return (
    <Paper square style={{'height':'850px',borderRadius:"10px"}}>
      <FormControl component="fieldset" className={classes.formControl}>
      {showlabel.portugal && <FormLabel component="legend" style={{textAlign:"left",paddingTop: "20px",paddingBottom: "20px"}}>Portugal</FormLabel>}
      {
        Object.entries(allstateRight.portugal).map(([key,value],i) => {
        return value ? (<div style={{borderRadius: '5px',marginTop:'10px',marginBottom:'10px'}} key={i}>
        <Chip
        style={{borderRadius: '5px',paddingTop:'20px',paddingBottom:'20px',minWidth:'175px'}}
        label={capitalizeFirstWord(key.replace(/_/g, " "))}
        onDelete={(evt) => RemoveArraykey(evt, key, 'portugal')}
        variant="outlined"
        />
        <br/>
        </div>) :"";
        }
      )  
      }
      </FormControl>
      <br/>
      <FormControl component="fieldset" className={classes.formControl}>
      {showlabel.nicaragua && <FormLabel component="legend" style={{textAlign:"left",paddingTop: "20px",paddingBottom: "20px"}}>Nicaragua</FormLabel>}
      {
        Object.entries(allstateRight.nicaragua).map(([key,value],i) => {
        return value ? (<div style={{borderRadius: '5px',marginTop:'10px',marginBottom:'10px'}} key={i}>
        <Chip
        style={{borderRadius: '5px',paddingTop:'20px',paddingBottom:'20px',minWidth:'175px'}}
        label={capitalizeFirstWord(key.replace(/_/g, " "))}
        onDelete={(evt) => RemoveArraykey(evt, key, 'nicaragua')}
        variant="outlined"
        />
        <br/>
        </div>) :"";
        }
      )  
      }
      </FormControl>
      <br/>
      <FormControl component="fieldset" className={classes.formControl}>
      {showlabel.marshall_islands && <FormLabel component="legend" style={{textAlign:"left",paddingTop: "20px",paddingBottom: "20px"}}>Marshall Islands</FormLabel>}
      {
        Object.entries(allstateRight.marshall_islands).map(([key,value],i) => {
        return value ? (<div style={{borderRadius: '5px',marginTop:'10px',marginBottom:'10px'}} key={i}>
        <Chip
        style={{borderRadius: '5px',paddingTop:'20px',paddingBottom:'20px',minWidth:'175px'}}
        label={capitalizeFirstWord(key.replace(/_/g, " "))}
        onDelete={(evt) => RemoveArraykey(evt, key, 'marshall_islands')}
        variant="outlined"
        />
        <br/>
        </div>) :"";
        }
      )  
      }
      {!showlabel.portugal && !showlabel.nicaragua && !showlabel.marshall_islands && <div style={{'marginTop':"50%"}}>
        <h4 style={{color:"#57525273"}}>No Value Selected</h4>
      </div>}
      </FormControl>
    </Paper>
  );
}

export default RightComponent;