import React from "react";
import { Grid, CircularProgress } from "@material-ui/core";
//here we have to fetch the data from the global redux store
import { useSelector } from "react-redux";
//posts use multiple post components
import Post from "./Post/Post";
import useStyles from "./styles";

const Posts = ({ setCurrentId }) => {
  //herein in the parameter we have the access of whole redux store,then we can immediately return state.posts(posts as in the index.js file of reducers we returned posts)
  const posts = useSelector((state) => state.posts);
  const classes = useStyles();

  return !posts.length ? (
    <CircularProgress />
  ) : (
    <Grid
      className={classes.container}
      container
      alignItems="stretch"
      spacing={3}
    >
      {posts.map((post) => (
        <Grid key={post._id} item xs={12} sm={6} md={6}>
          <Post post={post} setCurrentId={setCurrentId} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Posts;
