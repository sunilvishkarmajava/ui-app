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
          <Grid container spacing={3} style={{width:'100%'}}>
            <Grid item xs={6}>
              <LeftComponent updateArray={(arryname, value) =>updateChange(arryname, value)} capitalizeFirstWord = {capitalizeFirstLeter} allstate={state}/>
            </Grid>
            <Grid item xs={6}>
              <RightComponent RemoveArraykey={(evt, key, arryname) =>updateRightChange(evt, key, arryname)} capitalizeFirstWord = {capitalizeFirstLeter} allstateRight={state}/>
            </Grid>
          </Grid>
        </div>
      </>
  );
}

export default App;
