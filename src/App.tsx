import React, { useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import Search from './components/Search';
import Results from './components/Results';
import Popup from './components/Popup';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import {IMovie} from './components/IMovie';
import "./App.scss";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const emptyMovie: IMovie = {
  Year: 3000,
  Poster: "",
  Title: "",
  imdbRating: "",
  Plot: "",
  imdbID: "",
};
function App() {
 
  const [state, setState] = useState({
    s: "",
    results: [{} as IMovie],
    selected: {} as IMovie,
  });

  const apiurl = "http://www.omdbapi.com/?apikey=4a3b711b";

  const search = (e: any) => {
    if (e.key === "Enter") {
      axios(apiurl + "&s=" + state.s).then((data: AxiosResponse<any>) => {
        
        let results = data.data.Search;
        if(results){
        setState(prevState => {
          return { ...prevState, results: results }
        })}
      });
    }
  }
  
  const handleInput = (e: any) => {
    let s = e.target.value;

    setState(prevState => {
      return { ...prevState, s: s }
    });
  }

  const openPopup = (id: string) => {
    axios(apiurl + "&i=" + id).then(({ data }) => {
      let result = data;

      //console.log(result);

      setState(prevState => {
        return { ...prevState, selected: result }
      });
    });
  }

  const closePopup = () => {
    setState(prevState => {
      return { ...prevState, selected: emptyMovie }
    });
  }
  const classes = useStyles();

  return (
  <React.Fragment>
   <div className="App">
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
         
          <Typography variant="h6" className={classes.title}>
            Movie Database
          </Typography>
          
        </Toolbar>
      </AppBar>
    </div>
      <main>
        <Search handleInput={handleInput} search={search} />
        
        <Results results={state.results} openPopup={openPopup} />

        {(typeof state.selected.Title != "undefined") ? <Popup selected={state.selected} closePopup={closePopup} /> : false}
      </main>
    </div>
  </React.Fragment>
  );
}

export default App