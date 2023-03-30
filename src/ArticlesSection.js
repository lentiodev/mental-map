import React, { useState } from 'react';
import { Box, Typography, TextField, Card, CardContent, CardMedia, Button, Modal, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { Pagination } from '@mui/material';
import  articlesData  from './articlesData';

const ArticlesSection = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [articlesPerPage] = useState(8);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [search, setSearch] = useState('');

  const filteredArticles = articlesData.filter((article) =>
    article.title.toLowerCase().includes(search.toLowerCase())
  );

  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = filteredArticles.slice(indexOfFirstArticle, indexOfLastArticle);

  const handleChangePage = (event, newPage) => {
    setCurrentPage(newPage);
  };

  const handleOpenModal = (article) => {
    setSelectedArticle(article);
  };

  const handleCloseModal = () => {
    setSelectedArticle(null);
  };

  return (
    <Box sx={{ minHeight: '100%', backgroundColor: '#eefcfb', py: 4 }}>
      <Typography variant="h4" mb={4} textAlign="center">
        Mental Health Articles
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
        <TextField
          label="Search articles"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          variant="outlined"
        />
      </Box>
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr 1fr' }, gap: 2, justifyContent: 'center', alignItems: 'center', mx: 'auto', width: '90%', mb: 4 }}>
        {currentArticles.map((article) => (
          <Card key={article.id} sx={{ maxWidth: 345, minHeight: 300 }}>
            <CardMedia component="img" height="140" image={article.image} alt={article.title} />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                {article.title}
              </Typography>
            </CardContent>
            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
              <Button variant="contained" sx={{ backgroundColor: '#5ce0d8', color: '#fff' }} onClick={() => handleOpenModal(article)}>
                Read More
              </Button>
            </Box>
          </Card>
        ))}
      </Box>
      <Pagination count={Math.ceil(filteredArticles.length / articlesPerPage)} page={currentPage} onChange={handleChangePage} sx={{ justifyContent: 'center', display: 'flex', mb: 4 }} />
      
      <Modal open={!!selectedArticle} onClose={handleCloseModal}>
        <Box sx={{
          backgroundColor: 'background.paper',
          width: { xs: '90%', md: '60%' },
          mx: 'auto',
          my: '5%',
          p: 4,
          borderRadius: 2,
          boxShadow: 24,
          position: 'relative',
          overflowY: 'scroll',
          maxHeight: '80%',
        }}>
          <IconButton
            sx={{ position: 'absolute', top: 0, right: 0 }}
            onClick={handleCloseModal}
          >
            <CloseIcon />
          </IconButton>
          <Typography variant="h5" component="h2" mb={2}>
            {selectedArticle && selectedArticle.title}
          </Typography>
          <CardMedia
            component="img"
            height="200"
            image={selectedArticle && selectedArticle.image}
            alt={selectedArticle && selectedArticle.title}
            sx={{ mb: 2 }}
          />
          <Typography variant="body1" mb={2}>
            {selectedArticle && selectedArticle.content}
          </Typography>
        </Box>
      </Modal>
    </Box>

  );
};

export default ArticlesSection;