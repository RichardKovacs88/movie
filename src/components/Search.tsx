import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
	root: {
	  '& > *': {
		margin: theme.spacing(1),
		width: '25ch',
	  },
	},
  }));

interface ISearchProps {
	handleInput: any,
	search: any
}

const Search: React.FC<ISearchProps> = (props: ISearchProps) => {

	const classes = useStyles();
	return (
		<section className="searchbox-wrap">
			
			<TextField className={classes.root}  autoComplete="off" id="outlined-basic" label="Search for a movie..." 
				onChange={props.handleInput}
				onKeyPress={props.search}/>
		</section>
	)
}

export default Search