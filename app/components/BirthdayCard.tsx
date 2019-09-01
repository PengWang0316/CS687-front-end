import React, { memo, useCallback, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core';

import I18n from '../utils/I18n';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
  rootPaper: {
    margin: '50px auto 10px auto',
    width: '80%',
    padding: 15,
  },
  fab: {
    position: 'fixed',
    bottom: 20,
    right: 20,
  },
});

export const BirthdayCard = () => {
  const classes = useStyles({});

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={I18n.get('greeting')}
          height="240"
          image={I18n.get('cakeImg')}
          title={I18n.get('greeting')}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {I18n.get('greeting')}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {I18n.get('description')}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <audio controls>
          <source type="audio/mp3" src={I18n.get('audio')} />
        </audio>
      </CardActions>
    </Card>
  );
};

export default memo(BirthdayCard);
