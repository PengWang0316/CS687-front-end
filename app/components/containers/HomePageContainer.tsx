import React, { memo, useCallback, useState } from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

import BirthdayCard from '../BirthdayCard';
import GiftTable from '../GiftTable';
import I18n from '../../utils/I18n';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    section: {
      display: 'grid',
      gridTemplateAreas: `"${I18n.get('templateAreas')}"`,
      gridColumnGap: 20,
      alignItems: 'center',
      marginTop: 60,
    },
    card: {
      gridArea: 'card',
      justifySelf: I18n.get('cardCssJustify'),
    },
    table: {
      gridArea: 'table',
      justifySelf: I18n.get('tableCssJustify'),
    },
  }),
);


export const HomePageContainer = () => {
  const classes = useStyles({});
  return (
    <section className={classes.section}>
      <div className={classes.card}>
        <BirthdayCard />
      </div>
      <div className={classes.table}>
       <GiftTable />
      </div>
    </section>
  );
};

export default memo(HomePageContainer);
