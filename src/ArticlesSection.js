// src/ArticlesSection.js

import React, { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  TextField,
  Card,
  CardContent,
  CardMedia,
  Button,
} from "@mui/material";

import Pagination from "@mui/material/Pagination";
import articlesData from "./articlesData";

const ArticlesSection = () => {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const filteredArticles = articlesData.filter((article) =>
    article.title.toLowerCase().includes(search.toLowerCase())
  );

  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100%",
        backgroundColor: "#eefcfb",
        pt: 4,
        px: { xs: 2, sm: 4, md: 8 },
        pb: { xs: 4, sm: 6 },
      }}
    >
      <Typography variant="h4" align="center" mb={3}>
        Mental Health Articles
      </Typography>
      <Box mb={3} display="flex" justifyContent="center">
        <TextField
          label="Search articles"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          variant="outlined"
          sx={{ width: { xs: "100%", sm: "50%", md: "40%" } }}
        />
      </Box>
      <Grid container spacing={4}>
        {filteredArticles
          .slice((page - 1) * 8, page * 8)
          .map((article, index) => (
            <Grid item key={index} xs={12} sm={6} md={3}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image={article.image}
                  alt={article.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    {article.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {article.description}
                  </Typography>
                </CardContent>
                <Box p={2} display="flex" justifyContent="center">
                  <Button variant="contained" color="primary">
                    Read More
                  </Button>
                </Box>
              </Card>
            </Grid>
          ))}
      </Grid>
      <Box display="flex" justifyContent="center" mt={4}>
        <Pagination
          count={Math.ceil(filteredArticles.length / 8)}
          page={page}
          onChange={handleChange}
        />
      </Box>
    </Box>
  );
};

export default ArticlesSection;
