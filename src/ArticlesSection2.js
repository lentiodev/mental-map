import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActions,
  Button,
  Modal,
  IconButton,
  Pagination,
} from "@mui/material";
import { styled } from "@mui/material";
import SearchBar from "./SearchBar";
import articlesData from "./articlesData";
import CloseIcon from "@mui/icons-material/Close";

const SectionContainer = styled(Box)`
  background-color: #eefcfb;
  padding: 40px 0;
  height: 100%;
`;

const Title = styled(Typography)`
  margin-bottom: 24px;
`;

const ArticlesGrid = styled(Box)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
`;

const StyledCard = styled(Card)`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StyledCardMedia = styled(CardMedia)`
  height: 200px;
`;

const ModalContent = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  max-width: 800px;
  background-color: white;
  padding: 32px;
  border-radius: 8px;
`;

const ArticlesSection = () => {
  const [search, setSearch] = useState("");
  const [activeArticle, setActiveArticle] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [page, setPage] = useState(1);
  const articlesPerPage = 8;

  const handleReadMore = (article) => {
    setActiveArticle(article);
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setActiveArticle(null);
    setModalOpen(false);
  };

  const handleChangePage = (event, value) => {
    setPage(value);
  };

  const filteredArticles = articlesData.filter((article) =>
    article.title.toLowerCase().includes(search.toLowerCase())
  );

  const displayedArticles = filteredArticles.slice(
    (page - 1) * articlesPerPage,
    page * articlesPerPage
  );

  return (
    <SectionContainer>
      <Box sx={{ textAlign: "center", mb: 4 }}>
        <Title variant="h3">Mental Health Articles</Title>
        <SearchBar
          searchValue={search}
          setSearchValue={setSearch}
          sx={{ mb: 4 }}
        />
      </Box>
      <ArticlesGrid>
        {displayedArticles.map((article) => (
          <StyledCard key={article.id}>
            <StyledCardMedia image={article.image} title={article.title} />
            <CardContent>
              <Typography variant="h6">{article.title}</Typography>
            </CardContent>
            <CardActions>
              <Button onClick={() => handleReadMore(article)}>Read More</Button>
            </CardActions>
          </StyledCard>
        ))}
      </ArticlesGrid>
      {filteredArticles.length > articlesPerPage && (
        <Pagination
          count={Math.ceil(filteredArticles.length / articlesPerPage)}
          page={page}
          onChange={handleChangePage}
          color="primary"
          sx={{ mt: 4, mb: 2 }}
        />
      )}
      <Modal open={modalOpen} onClose={handleModalClose}>
        <ModalContent>
          {activeArticle && (
            <>
              <Typography variant="h4">{activeArticle.title}</Typography>
              <Typography>{activeArticle.content}</Typography>
              <IconButton
                edge="end"
                color="inherit"
                onClick={handleModalClose}
                aria-label="close"
              >
                <CloseIcon />
              </IconButton>
            </>
          )}
        </ModalContent>
      </Modal>
    </SectionContainer>
  );
};

export default ArticlesSection;
