import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Movie } from './Movie';
import { IResult } from './IResult';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
	height: 240,
	
  },
});

export const Result = (result: IResult, openPopup: any) => {
	const classes = useStyles();
	return (
		
		 <React.Fragment>
		<Card  className="result"> 
		<CardActionArea onClick={() => openPopup(result.result.imdbID)}>
		  <CardMedia
			className={classes.media}
			image={result.result.Poster}
			title={ result.result.Title }
		  />
		  <CardContent>
			<Typography gutterBottom variant="h5" component="h2">
			{result.result.Title}
			</Typography>
			
		  </CardContent>
		</CardActionArea>
		<CardActions>
		  <Button size="small" color="primary" onClick={() => openPopup(result.result.imdbID)}>
			Open Info
		  </Button>
		  
		</CardActions>
	  </Card>
	  </React.Fragment>
	)
}


