import { Typography, Card, CardContent, CardMedia, Grid, Container } from '@mui/material';import { GitHub, LinkedIn, } from '@mui/icons-material';
import { CardActions, Button } from '@mui/material';

function ArticlesGridTemplate() {
    return (
      <div>
        {<div>

<div style={{ textAlign: 'center', fontFamily: 'Josefin Sans', }}>
  <Typography variant="h1" sx={{  fontSize: '36px', fontWeight: '' , marginBottom: '2rem', marginTop: '3rem',
 }}>
  Articles Grid Template
  </Typography>
</div>


<Container maxWidth="md">
  <Grid container spacing={8}>
    <Grid item xs={12} sm={6} md={4}>
      <Card sx={{ maxWidth: 445, backgroundColor: '#f5f5f5', '&:hover': { backgroundColor: '#e0e0e0' } }}>
        <CardMedia
          sx={{ height: 140 }}
          image="https://source.unsplash.com/random"
          title="Card 1"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Article One
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: 'center' }}>
        <Button variant="contained" href="https://google.com">Contained</Button>
          
        </CardActions>
      </Card>
    </Grid>
    <Grid item xs={12} sm={6} md={4}>
      <Card sx={{ maxWidth: 345, backgroundColor: '#f5f5f5', '&:hover': { backgroundColor: '#e0e0e0' } }}>
        <CardMedia
          sx={{ height: 140 }}
          image="https://source.unsplash.com/random"
          title="Card 1"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Article Two
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: 'center' }}>
        <Button variant="contained" href="https://google.com">Contained</Button>
        </CardActions>
      </Card>
    </Grid>
    <Grid item xs={12} sm={6} md={4}>
      <Card sx={{ maxWidth: 345, backgroundColor: '#f5f5f5', '&:hover': { backgroundColor: '#e0e0e0' } }}>
        <CardMedia
          sx={{ height: 140 }}
          image="https://source.unsplash.com/random"
          title="Card 1"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Article Three
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</Typography>
</CardContent>
    <CardActions sx={{ justifyContent: 'center' }}>
    <Button variant="contained" href="https://google.com">Contained</Button>
    </CardActions>
  </Card>
</Grid>
    <Grid item xs={12} sm={6} md={4}>
      <Card sx={{ maxWidth: 345, backgroundColor: '#f5f5f5', '&:hover': { backgroundColor: '#e0e0e0' } }}>
        <CardMedia
          sx={{ height: 140 }}
          image="https://source.unsplash.com/random"
          title="Card 1"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Article Four
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</Typography>
</CardContent>
    <CardActions sx={{ justifyContent: 'center' }}>
    <Button variant="contained" href="https://google.com">Contained</Button>
    </CardActions>
  </Card>
</Grid>

<Grid item xs={12} sm={6} md={4}>
      <Card sx={{ maxWidth: 345, backgroundColor: '#f5f5f5', '&:hover': { backgroundColor: '#e0e0e0' } }}>
        <CardMedia
          sx={{ height: 140 }}
          image="https://source.unsplash.com/random"
          title="Card 1"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Article Four
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</Typography>
</CardContent>
    <CardActions sx={{ justifyContent: 'center' }}>
    <Button variant="contained" href="https://google.com">Contained</Button>
    </CardActions>
  </Card>
</Grid>

<Grid item xs={12} sm={6} md={4}>
      <Card sx={{ maxWidth: 345, backgroundColor: '#f5f5f5', '&:hover': { backgroundColor: '#e0e0e0' } }}>
        <CardMedia
          sx={{ height: 140 }}
          image="https://source.unsplash.com/random"
          title="Card 1"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Article Four
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</Typography>
</CardContent>
    <CardActions sx={{ justifyContent: 'center' }}>
    <Button variant="contained" href="https://google.com">Contained</Button>
    </CardActions>
  </Card>
</Grid>


        
{/* <Grid item xs={12} sm={6} md={3}>
      <img src="https://cdn.pixabay.com/photo/2020/06/23/00/53/river-5330961_960_720.jpg" alt="additional photo" />
    </Grid> */}
</Grid>
      </Container>
      <br />
    </div>
}
      </div>
    );
  }
  
export default ArticlesGridTemplate;
