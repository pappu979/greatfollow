import React from 'react';
import { Grid, Box } from '@mui/material';

const ResponsiveText = () => {
    return (
        <Grid
            justifyContent="center"
            alignItems="center"
            width="90%"
            margin="0 auto"
            paddingTop="10px"
            boxShadow="0px 2px 4px rgba(0, 0, 0, 0.1)"
        >
            <Grid item xs={12} sm={10} md={8} lg={6}>
                <Box textAlign="center">
                    <div style={{padding: "10px"}}>
                        <p>
                            SMM (Social Media Marketing) is the use of social media platforms such as Instagram, Facebook, Twitter,
                            Youtube, and many more to promote yourself or your company. If you are looking for a way to boost your
                            online presence, then your best choice is our SMM panel where we offer services to help you boost your
                            online presence across all social media platforms at the cheapest prices.
                        </p>
                    </div>
                </Box>
            </Grid>
        </Grid>
    );
};

export default ResponsiveText;
