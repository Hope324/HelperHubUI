import React from 'react';
import { Box, Container, Typography, IconButton, Link } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

const breakTextEveryNWords = (text, n) => {
  const words = text.split(' ');
  const result = [];
  for (let i = 0; i < words.length; i += n) {
    result.push(words.slice(i, i + n).join(' '));
  }
  return result.join('<br />');
};

const Footer = () => {
  const paragraphText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
  const brokenParagraph = breakTextEveryNWords(paragraphText, 5);

  return (
    <Box sx={{ backgroundColor: 'black', color: 'white', padding: 2 }}>
      <Container>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {/* Left Section */}
          <Box>
            {/* Follow Us On Icons */}
            <Typography variant="h6" gutterBottom>
              Follow Us On
              <IconButton color="inherit" component={Link} href="#">
                <FacebookIcon />
              </IconButton>
              <IconButton color="inherit" component={Link} href="#">
                <TwitterIcon />
              </IconButton>
            </Typography>

            {/* HelperHub Font-like Logo */}
            <Typography variant="h6" gutterBottom>
              HelperHub
            </Typography>

            {/* Small 5-line Paragraph */}
            <Typography variant="body2" dangerouslySetInnerHTML={{ __html: brokenParagraph }} />
          </Box>

          {/* Center Section (Menu) */}
          <Box sx={{ textAlign: 'center', flexGrow: 1 }}>
            {/* Menu Links */}
            <Typography variant="body2">
              <Box>
                <Link href="#" color="inherit">
                  Home
                </Link>
              </Box>
              <Box>
                <Link href="#" color="inherit">
                  Services
                </Link>
              </Box>
              <Box>
                <Link href="#" color="inherit">
                  About Us
                </Link>
              </Box>
              <Box>
                <Link href="#" color="inherit">
                  Contact Us
                </Link>
              </Box>
            </Typography>
          </Box>

          {/* Right Section */}
          <Box sx={{ textAlign: 'right' }}>
            {/* Additional Right-aligned content */}
            <Typography variant="body2">
              Right-aligned content <br />
              More content <br />
              ...
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
