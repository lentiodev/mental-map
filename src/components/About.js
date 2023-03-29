import { Typography, AppBar, Card, CardContent, CardMedia, Grid, Toolbar, Container } from '@mui/material';
import heroImage from '../images/hero.png';
import mapImage from '../images/map.png';
import { GitHub, LinkedIn } from '@mui/icons-material';
import { CardActions, IconButton } from '@mui/material';
import Navbar from './NavBar';

function About() {
    return (
      <div>
        <Navbar />
        {<div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div">
            Mental Map
          </Typography>
        </Toolbar>
      </AppBar>

<div
  style={{
    backgroundImage: `url(${heroImage})`,
    height: '50vh',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundBlendMode: 'soft-light',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
    textAlign: 'center',
  }}
>
  <div>
    <Typography variant="h1" sx={{ fontSize: '5rem', fontWeight: 'bold', textShadow: '2px 2px #000', marginBottom: '2rem' }}>
      About Us
    </Typography>
  </div>
</div>

<Container maxWidth="md" sx={{ marginTop: '4rem' }}>
<div style={{ textAlign: 'center' }}>
  <Typography variant="h1" sx={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '2rem' }}>
    About Mental Map
  </Typography>
</div>
  <Typography variant="body1" gutterBottom>
    At Mental Map, we are committed to improving mental health and wellbeing for everyone. We believe that mental health is just as important as physical health, and that seeking help is a sign of strength, not weakness. Our mission is to provide accessible and affordable resources to support individuals and communities in achieving their best mental health.
  </Typography>
  <Card sx={{ maxWidth: 900, margin: '2rem auto' }}>
    <CardMedia
      component="img"
      image={mapImage}
      alt="mental map"
    />
  </Card>
</Container>

<div style={{ textAlign: 'center' }}>
  <Typography variant="h1" sx={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '2rem', marginTop: '3rem' }}>
    Meet The Team
  </Typography>
</div>


<Container maxWidth="md">
  <Grid container spacing={2}>
    <Grid item xs={12} sm={6} md={4}>
      <Card sx={{ maxWidth: 345, backgroundColor: '#f5f5f5', '&:hover': { backgroundColor: '#e0e0e0' } }}>
        <CardMedia
          sx={{ height: 140 }}
          image="https://source.unsplash.com/random"
          title="Card 1"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lentio Sechou
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: 'center' }}>
          <IconButton aria-label="GitHub" href="https://github.com">
            <GitHub />
          </IconButton>
          <IconButton aria-label="LinkedIn" href="https://linkedin.com">
            <LinkedIn />
          </IconButton>
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
            Natalia Sergovantseva
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: 'center' }}>
          <IconButton aria-label="GitHub" href="https://github.com">
            <GitHub />
          </IconButton>
          <IconButton aria-label="LinkedIn" href="https://linkedin.com">
            <LinkedIn />
          </IconButton>
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
            Iwona Malkinska
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</Typography>
</CardContent>
    <CardActions sx={{ justifyContent: 'center' }}>
      <IconButton aria-label="GitHub" href="https://github.com">
        <GitHub />
      </IconButton>
      <IconButton aria-label="LinkedIn" href="https://linkedin.com">
        <LinkedIn />
      </IconButton>
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
          Vitaliy Zharkovskiy
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</Typography>
</CardContent>
    <CardActions sx={{ justifyContent: 'center' }}>
      <IconButton aria-label="GitHub" href="https://github.com">
        <GitHub />
      </IconButton>
      <IconButton aria-label="LinkedIn" href="https://linkedin.com">
        <LinkedIn />
      </IconButton>
    </CardActions>
  </Card>
</Grid>
        
{/* <Grid item xs={12} sm={6} md={3}>
      <img src="https://cdn.pixabay.com/photo/2020/06/23/00/53/river-5330961_960_720.jpg" alt="additional photo" />
    </Grid> */}
</Grid>
      </Container>
    </div>
}
      </div>
    );
  }
  
export default About;
