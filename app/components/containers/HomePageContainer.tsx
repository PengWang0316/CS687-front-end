import React, { memo, useCallback, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Fab, Tooltip } from '@material-ui/core';
import { Add as AddIcon } from '@material-ui/icons';
import I18n from '@kevinwang0316/i18n';

import PostList from '../PostList';
import AddPostDialog from '../AddPostDialog';

const useStyles = makeStyles({
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

export const HomePageContainer = () => {
  const classes = useStyles({});
  const [isOpenAddPost, setIsOpenAddPost] = useState(false);
  const addPostDialogCloseCallback = useCallback(() => setIsOpenAddPost((state: boolean) => !state), []);

  return (
    <Paper className={classes.rootPaper}>
      <PostList />
      <Tooltip title={I18n.get('addPost')} placement="left-start">
        <Fab size="medium" color="secondary" aria-label="Add" className={classes.fab} onClick={addPostDialogCloseCallback}>
          <AddIcon />
        </Fab>
      </Tooltip>
      <AddPostDialog
        isOpen={isOpenAddPost}
        handleClose={addPostDialogCloseCallback}
      />
    </Paper>
  );
};

export default memo(HomePageContainer);
