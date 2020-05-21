import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { IMovie } from './IMovie';


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
	height: 240,
	
  },
});

interface IResultProps {
	result: IMovie,
	openPopup: (id: string) => void
}

export const Result: React.FC<IResultProps> = (props: IResultProps) => {
	const classes = useStyles();
	return (
		
		 <React.Fragment>
		
		<Card  className="result"> 
		<CardActionArea onClick={() => props.openPopup(props.result.imdbID)}>
		  <CardMedia
			className={classes.media}
			image={props.result.Poster}
			title={ props.result.Title }
		  />
		  <CardContent>
			<Typography gutterBottom variant="h5" component="h2">
			{props.result.Title}
			</Typography>
			
		  </CardContent>
		</CardActionArea>
		<CardActions>
		  <Button size="small" color="primary" onClick={() => props.openPopup(props.result.imdbID)}>
			Open Info
		  </Button>
		  
		</CardActions>
	  </Card>

	  </React.Fragment>
	)
}


