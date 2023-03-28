<FifthVitaliyBranch
import React from "react";
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "./FooterStyles";

const Footer = () => {
return (
	<Box>
	<h1 style={{ color: "#5ce0d8",
				textAlign: "center",
				marginTop: "-50px",
                 }}>
		Mental Map: Feel good with best solutions
	</h1>
	<Container>
		<Row>
		<Column>
			<Heading>About Us</Heading>
			<FooterLink href="#">Aim</FooterLink>
			<FooterLink href="#">Vision</FooterLink>
			<FooterLink href="#">Testimonials</FooterLink>
		</Column>
		<Column>
			<Heading>Solutions</Heading>
			<FooterLink href="#">Get Quote</FooterLink>
			<FooterLink href="#">Testings</FooterLink>
			<FooterLink href="#">Audio</FooterLink>
			<FooterLink href="#">Video</FooterLink>
		</Column>
		<Column>
			<Heading>Contact Us</Heading>
			<FooterLink href="#">Iwona</FooterLink>
			<FooterLink href="#">Natalia</FooterLink>
			<FooterLink href="#">Lentio</FooterLink>
			<FooterLink href="#">Vitaliy</FooterLink>
		</Column>
		<Column>
			<Heading>Social Media</Heading>
			<FooterLink href="#">
			<i className="fab fa-facebook-f">
				<span style={{ marginLeft: "10px" }}>
				Facebook
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-instagram">
				<span style={{ marginLeft: "10px" }}>
				Instagram
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-twitter">
				<span style={{ marginLeft: "10px" }}>
				Twitter
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-youtube">
				<span style={{ marginLeft: "10px" }}>
				Youtube
				</span>
			</i>
			</FooterLink>
		</Column>
		</Row>
	</Container>
    <h5 style={{ color: "#5ce0d8",
				textAlign: "center",
				marginTop: "50px",
                 }}>
		© All rights reserved. 2023
	</h5>
	</Box>
);
};
=======
import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box sx={{ backgroundColor: '#eefcfb', py: 4 }}>
      <Typography variant="body1" align="center" mb={2}>
        Thank you to Mental Map, a resource for mental health articles, information, and support.
      </Typography>
      <Box display="flex" justifyContent="center" mb={2}>
        <IconButton color="primary" href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <Facebook />
        </IconButton>
        <IconButton color="primary" href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <Twitter />
        </IconButton>
        <IconButton color="primary" href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <Instagram />
        </IconButton>
        <IconButton color="primary" href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <LinkedIn />
        </IconButton>
      </Box>
      <Typography variant="body2" align="center" color="text.secondary">
        &copy; {currentYear} Mental Map. All rights reserved.
      </Typography>
    </Box>
  );
};

main
export default Footer;
