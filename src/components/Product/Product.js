import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton  } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons' //named imports keep it same

import useStyles from './styles'

const Product = ({product}) => {

    const classes = useStyles();
    return (
        <Card className={Classes.root}>
            <CardMedia className ={classes.media} image='' title={product.name}/>
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography variant="h5" gutterBottom > 
                        {product.name}
                    </Typography>

                    <Typography variant="h5" >
                        {product.price}
                    </Typography>
                </div>
                <Typography variant="h2" color="textSecondary">{product.description}</Typography>
            </CardContent>
            <CardActions disableSpacing className={classes.cardActions}>
              <IconButton arial-label="Add to Cart">
                <AddShoppingCart/>
              </IconButton>
            </CardActions>
        </Card>
    )
}

export default Product
