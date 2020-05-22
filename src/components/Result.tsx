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

   button: {
	background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
	border: 0,
	borderRadius: 3,
	boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
	color: 'white',
  },
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
	
	if (props.result.Title == null){
		return (<React.Fragment><div>Let Search</div></React.Fragment>);
	}
	else
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
			<Button size="small" className={classes.button} color="primary" onClick={() => props.openPopup(props.result.imdbID)}>
				Open Info
			</Button>
			
			</CardActions>
		</Card>
	  </React.Fragment>
	)
}


