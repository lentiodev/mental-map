import { Typography, Card, CardContent, CardMedia, Grid, Container } from '@mui/material';
import heroImage from '../images/hero.png';
import mapImage from '../images/map.png';
import { GitHub, LinkedIn } from '@mui/icons-material';
import { CardActions, IconButton } from '@mui/material';
import Iwona from '../images/iwona.jpeg';
import Natalia from '../images/natalia.jpg';
import Lentio from '../images/lentio.jpg';
import Vitaly from '../images/vitaly.jpg';
import Navbar from './NavBar';
import Footer from './Footer';

function About() {
  return (
    <div>
      <Navbar />
        {<div>


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
    Our Mission
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
      sx={{ height: 220 }}
      image={Lentio}
      title="Lentio"
    />
        <CardContent>
        <Typography gutterBottom variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
            Lentio Sechou
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: 'center' }}>
          <IconButton aria-label="GitHub" href="https://github.com/lentiodev">
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
      sx={{ height: 220 }}
      image={Iwona}
      title="Iwona"
    />
    <CardContent>
      <Typography gutterBottom variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
        Iwona Malkinska
      </Typography>
      <Typography variant="body2" color="textSecondary" component="p">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </Typography>
    </CardContent>
    <CardActions sx={{ justifyContent: 'center' }}>
      <IconButton aria-label="GitHub" href="https://github.com/ivonamaria">
        <GitHub />
      </IconButton>
      <IconButton aria-label="LinkedIn" href="https://www.linkedin.com/in/iwona-malkinska-90a941215/">
        <LinkedIn />
      </IconButton>
    </CardActions>
  </Card>
</Grid>

    <Grid item xs={12} sm={6} md={4}>
      <Card sx={{ maxWidth: 345, backgroundColor: '#f5f5f5', '&:hover': { backgroundColor: '#e0e0e0' } }}>
      <CardMedia
      sx={{ height: 220 }}
      image={Natalia}
      title="Natalia"
    />
        <CardContent>
        <Typography gutterBottom variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
  Natalia Sergovantseva
</Typography>

          <Typography variant="body2" color="textSecondary" component="p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</Typography>
</CardContent>
    <CardActions sx={{ justifyContent: 'center' }}>
      <IconButton aria-label="GitHub" href="https://github.com/web3cryptoidea">
        <GitHub />
      </IconButton>
      <IconButton aria-label="LinkedIn" href="https://www.linkedin.com/in/natalia-sergovantseva/">
        <LinkedIn />
      </IconButton>
    </CardActions>
  </Card>
</Grid>
    <Grid item xs={12} sm={6} md={4}>
      <Card sx={{ maxWidth: 345, backgroundColor: '#f5f5f5', '&:hover': { backgroundColor: '#e0e0e0' } }}>
      <CardMedia
      sx={{ height: 220 }}
      image={Vitaly}
      title="Vitaly"
    />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
          Vitaliy Zharkovskiy
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</Typography>
</CardContent>
    <CardActions sx={{ justifyContent: 'center' }}>
      <IconButton aria-label="GitHub" href="https://github.com/VitaliyZhark">
        <GitHub />
      </IconButton>
      <IconButton aria-label="LinkedIn" href="https://linkedin.com">
        <LinkedIn />
      </IconButton>
    </CardActions>
  </Card>
</Grid>
<Grid item xs={12} sm={6} md={4}>
  <Card sx={{ maxWidth: 900, backgroundColor: '#f5f5f5', '&:hover': { backgroundColor: '#e0e0e0' } }}>
    <CardContent>
      <Typography gutterBottom variant="h6" component="div" sx={{ fontWeight: 'bold' }} uppercase>
        Get to know us!
      </Typography>
      <Typography variant="body2" color="textSecondary" component="p">
        The team at Mental Map is a group of highly skilled professionals dedicated to delivering cutting-edge solutions in the field of mental health. The team comprises of experts in various fields including psychiatry, psychology, counseling, and software development. They work collaboratively to create innovative digital tools that aim to help people manage their mental health effectively.  
      </Typography>
    </CardContent>
  </Card>
</Grid>
<Grid item xs={12} sm={6} md={4}>
  <Card sx={{ maxWidth: 900, backgroundColor: '#f5f5f5', '&:hover': { backgroundColor: '#e0e0e0' } }}>
    <CardContent>
     
      <Typography variant="body2" color="textSecondary" component="p">
      
    <p>Each team member brings a unique set of skills and experiences to the table, and they all share a common passion for improving the lives of those struggling with mental health issues.</p> <p>With their expertise and dedication, the team at Mental Map is committed to making a positive impact in the mental health industry.</p>
      </Typography>
    </CardContent>
  </Card>
</Grid>
</Grid>
      </Container>
    </div>
}
<Footer />
      </div>
    );
  }
  
export default About;
