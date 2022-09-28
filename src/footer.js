import {
    Container,
    Grid,
    Box,
    Link,
    Paper
} from '@mui/material';
import { alignProperty } from '@mui/material/styles/cssUtils';
import { padding } from '@mui/system';


export default function Footer() {
  return (
    <footer borderBottom>
      <Paper
       sx={{marginTop: 'calc(10% + 60px)',
       width: '100%',
       position: 'fixed',
       bottom: 0,
       bgcolor: 'black',
       color: 'white',
       }} component="footer" square variant="outlined"
      >
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid item xs={10} sm={4}>
              <Box style={{padding: 20, fontSize: 25}}>Categories</Box>
              <Box>
                <Link href="/" color="inherit" style={{textDecoration: 'none'}}>
                    Home Appliances
                </Link>
              </Box>
              <Box >
                <Link href="/" color="inherit"style={{textDecoration: 'none'}}>
                    Phones
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit" style={{textDecoration: 'none'}}>
                    Kitchen Appliances
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit" style={{textDecoration: 'none'}}>
                    Cameras
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit" style={{textDecoration: 'none'}}>
                    Computers and Tablets
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit" style={{textDecoration: 'none'}}>
                    Wearables
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box style={{padding: 20, fontSize: 25}}>Important Links</Box>
              <Box>
                <Link href="/" color="inherit" style={{textDecoration: 'none'}}>
                  About Us
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit" style={{textDecoration: 'none'}}>
                  Seller Registeration
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box style={{padding: 20, fontSize: 25}}>Contact Us</Box>
              <Box>
                <Link href="/" color="inherit" style={{textDecoration: 'none'}}>
                  Email
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit" style={{textDecoration: 'none'}}>
                  Instagram
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit" style={{textDecoration: 'none'}}>
                  Twitter
                </Link>
              </Box>
            </Grid>
          </Grid>
          <Box textAlign="center" style={{margin: 10}}>
            <hr></hr>
            Copyright © 2022 All rights reserved
          </Box>
        </Container>
      </Paper>
    </footer>
  );
}
