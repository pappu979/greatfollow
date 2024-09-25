import React from 'react';
import { Grid, Box, Typography } from '@mui/material';
import womanImg from '../image/woman.png';
import '../App.css'

const ImageWithText = () => {
    return (
        <Grid
            container
            spacing={2}
            alignItems="center"
            style={{  backgroundColor: "rgba(233, 242, 252, 1)" }}
            className='sideText'
        >
            {/* Image Section */}
            <Grid item xs={12} md={6}>
                <Box
                    component="img"
                    src={womanImg}
                    alt="Placeholder"
                    style={{ width: '100%', height: "80%" }}
                />
            </Grid>

            {/* Text Section */}
            <Grid item xs={12} md={6}>
                <Box padding="20px">
                    <Typography variant="h4" color='#4da872' gutterBottom fontWeight="bold">
                        SMM panel - Cheapsmmglobal
                    </Typography>
                    <Typography variant="body1" color='#0c305b'>
                        The importance of an SMM panel website and a good ranking on search engines like Google is the best
                        tool for marketing. We at cheapsmmglobal provide essential and most suitable SMM plans for digital marketing that
                        includes All Social media services, Content management, And lead generation.
                    </Typography>
                    <Typography variant="body1" color='#0c305b' paddingTop='15px'>
                        Cheapsmmglobal is the best SMM panel in India. We have extensive experience in the SMM Field,
                        and we have been affiliated with big names.
                    </Typography>
                </Box>
            </Grid>
        </Grid>
    );
};

export default ImageWithText;
