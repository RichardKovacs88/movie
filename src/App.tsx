import React, { useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import Search from './components/Search';
import Results from './components/Results';
import Popup from './components/Popup';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {IMovie} from './components/IMovie';
import "./App.css";

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
  Year: 1988,
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

      console.log(result);

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
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
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