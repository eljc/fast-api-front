import axios from "axios";
import React, { useState, useEffect } from "react";
import { fetchToken } from "./Auth";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";

const hdrs = {
  "Content-type": "application/json",
  Authorization: "Bearer " + fetchToken(),
};

export default function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        let response = await axios.get("http://localhost:8000/api/posts", {
          headers: hdrs,
        });
        setPosts(response.data.posts);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPost();
  }, []);

  return (
    <main>
      <Container sx={{ py: 8 }} maxWidth="md">
        <Grid container spacing={4}>
          {posts.map((post) => (
            <Grid item key={post} xs={12} sm={6} md={4}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardMedia
                  component="div"
                  sx={{
                    // 16:9
                    pt: "56.25%",
                  }}
                  image={post.image}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {post.title}
                  </Typography>
                  <Typography>{post.content}</Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">View</Button>
                  <Button size="small">Edit</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      ;
    </main>
  );
}
