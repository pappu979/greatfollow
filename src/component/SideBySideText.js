import React from 'react';
import { Grid, Box } from '@mui/material';
import '../App.css';

const SideBySideText = () => {
    return (
        <Grid
           className='sideText'
            container
            spacing={2}
            justifyContent="center"
            alignItems="center"
        >
            {/* First Div */}
            <Grid item xs={12} md={6}>
                <Box
                    padding="10px 20px"
                    textAlign="start"
                >
                    <p>
                        To make your business stand out from others in the modern competitive market is very difficult.
                        It doesn't matter how good your product. Ineffective marketing does not generate revenue at all.
                    </p>
                </Box>
            </Grid>

            {/* Second Div */}
            <Grid item xs={12} md={6}>
                <Box
                    padding="10px 20px"
                    textAlign="start"
                >
                    <p>
                        <span style={{color: "#1d83eb"}}>CHEAPSMMGLOBAL - SMM Panel</span> will provide you with effective marketing services to help you surpass
                        your competitors. Services are economical and in accordance with demands.
                    </p>
                </Box>
            </Grid>
        </Grid>
    );
};

export default SideBySideText;
