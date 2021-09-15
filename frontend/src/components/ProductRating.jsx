import React from 'react';
import Rating from '@material-ui/lab/Rating';
import { makeStyles } from '@material-ui/core/styles';
//rating component
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    '& > * + *': {
      marginTop: theme.spacing(1),
    },
  },
}));
function ProductRating({ rating }) {
  const classes = useStyles();
  return (
    <div className={classes.root} id='rating'>
      <Rating
        name='half-rating-read'
        defaultValue={rating}
        precision={0.1}
        readOnly
      />
    </div>
  );
}

export default ProductRating;
