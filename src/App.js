import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import LeftComponent from './components/LeftComponent';
import RightComponent from './components/RightComponent';
import './App.css';


function App() {
    const [state, setState] = React.useState({
      portugal: {
        "aasiya_jayavant": false,
        "luvleen_lawrence": false,
        "rey_mibourne": false,
        "cayla_brister": false,
      },
      nicaragua: {
        "deveedass_nandi": false,
        "obasey_chidy": false,
        "xenie_dolezelova": false,
        "ezequiel_dengra": false,
      },
      marshall_islands: {
        "aaron_almaraz": false,
        "jelena_denisova": false
      },
    });


    const capitalizeFirstLeter = (s) =>{
      if (typeof s !== 'string') return ''
      return s.charAt(0).toUpperCase() + s.slice(1)
    }

    

    const updateChange = (event, arryname) => {
        // console.log(arryname, event, event.target.name, event.target.checked);
        let tempstate = state;
        tempstate[arryname][event.target.name] = event.target.checked;
        // console.log(tempstate);
          setState({ ...tempstate})   
    };

    const updateRightChange = (evt, key, arryname) => {
      let tempstate = state;
      tempstate[arryname][key] = (tempstate[arryname][key])?!tempstate[arryname][key]:false;
      setState({ ...tempstate})   
  };
    return (
      <>
        <div className="App">
          <Grid container spacing={3} style={{background: "#7b27c3"}}>
          <Grid item xs={12} style={{background:"white",display:'inherit'}}>
          <div style={{textAlign:"left",marginLeft: "13%",width:'20%'}}>
            <ul style={{listStyle:"none",display:'inline-flex'}}>
              <li style={{padding: "10px 35px",fontWeight: "700",letterSpacing: "3px"}}>LOGO</li>
            </ul>
            </div>
            <div style={{textAlign:"right",marginRight: "18%" ,width:'80%'}}>
            <ul style={{listStyle:"none",display:'inline-flex'}}>
              <li style={{padding: "10px 35px"}}>Home</li>
              <li style={{padding: "10px 35px"}}>Profile</li>
              <li style={{padding: "10px 35px"}}>Clients</li>
              <li style={{padding: "10px 35px",border: "1px solid lightgray",borderRadius:"5px",cursor: "pointer"}}>Get in Touch</li>
            </ul>
            </div>
            
          </Grid>
            <Grid item xs={6} style={{padding: "100px 15px 135px 260px"}}>
              <LeftComponent updateArray={(arryname, value) =>updateChange(arryname, value)} capitalizeFirstWord = {capitalizeFirstLeter} allstate={state}/>
            </Grid>
            <Grid item xs={6} style={{padding: "100px 260px 135px 15px"}}>
              <RightComponent RemoveArraykey={(evt, key, arryname) =>updateRightChange(evt, key, arryname)} capitalizeFirstWord = {capitalizeFirstLeter} allstateRight={state}/>
            </Grid>
          </Grid>
        </div>
      </>
  );
}

export default App;
