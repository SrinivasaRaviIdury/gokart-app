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

const Cards = ({ title, price, description, category, rating, image }) => {
  const classes = useStyles();
  return (
    <div className='card'>
      <div className='card__content'>
        <div className='card__content__image'>
          <img src={image} alt={title} />
        </div>
        <div className='card__content__title'>
          <h2>{title}</h2>
        </div>
        <div className='card__content__desc'>
          <p>{description}</p>
          <h4>${price}</h4>
        </div>
        <div className={classes.root} id='rating'>
          <Rating
            name='half-rating-read'
            defaultValue={rating.rate}
            precision={0.1}
            readOnly
          />
        </div>
      </div>

      <button>Add To Cart</button>
    </div>
  );
};

export default Cards;
