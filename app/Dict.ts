interface Dictionary {
  [index: string]: {
    [index: string]: string;
  };
}

const dict: Dictionary = {
  'en-US': {
    appName: 'My Blog App',
    postListTitle: 'Post List',
    close: 'Close',
    save: 'Save',
    cancel: 'Cancel',
    delete: 'Delete',
    title: 'Title',
    emptyContent: 'Content is loading....',
    addPost: 'Add Post',
    addPostTitle: 'Add a new post',
    deleteDialogTitle: 'Deletion Confirm',
    deleteDialogContent: 'Warning: The post cannot be recoverd after the deletion',
    deletePostSuccess: 'One post has been deleted successfully',
  },
};

dict.en = dict['en-US'];
// dict['zh-HK'] = dict.zh;
// dict['zh-TW'] = dict.zh;
// dict['zh-CN'] = dict.zh;

export default dict;
