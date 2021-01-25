import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid, { GridSpacing } from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      background: '#FFFFFF',
      boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.1)',
      borderRadius: 4
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
    },
    content: {
      flex: '1 0 auto',
    },
    cover: {
      width: 151,
    },
    controls: {
      display: 'flex',
      alignItems: 'center',
      paddingLeft: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    },
    playIcon: {
      height: 38,
      width: 38,
    },
  }),
);

interface CustomCardProps {
    handleClickOpen: ()=>void
}

const CustomCard : React.FC<CustomCardProps> =  ({handleClickOpen})=> {
    const classes = useStyles();
    return(
        <Card className={classes.root} onClick={()=>handleClickOpen()}>
          <CardActionArea>
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    Facility Name
                </Typography>
                <Typography variant="subtitle1" component="h4">
                    range ficility
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                    across all continents except Antarctica
                </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

 export default CustomCard;