import React from 'react'
import { Button, Container, Grid, makeStyles, Paper, Typography } from '@material-ui/core';
import conference from '../assets/conference.jpeg';
import MediaCard from '../components/MediaCard';

const useStyles = makeStyles((theme) => ({
    
}))

function Home() {
    return (
        <div>
            <Container maxWidth="lg">
                <Paper elevation={3}>
                    <img src={conference} height="500" />
                </Paper>

                <Typography variant="subtitle1" gutterBottom>
                    Since 2009, coders have created thousands of amazing experiments using Chrome, Android, AI, AR and more. We're showcasing projects here, along with helpful tools and resources, to inspire others to create new experiments. Here are collections of experiments to explore, with new ones added every week. Have fun.
                </Typography>
                {/* </Container> */}

                <Grid container spacing={3}>
                    <Grid item xs={12} sm={4} md={4}>
                        <MediaCard cardImage={'card-bmkg.jpeg'} title={'Agenda'} description={'...'} />
                    </Grid>
                    <Grid item xs={12} sm={4} md={4}>
                        <MediaCard cardImage={'card-bmkg.jpeg'} title={'Materi'} description={'...'} />
                    </Grid>
                    <Grid item xs={12} sm={4} md={4}>
                        <MediaCard cardImage={'card-bmkg.jpeg'} title={'Dokumentasi'} description={'...'} />
                    </Grid>
                </Grid>

                <Typography variant="h6" align="center" gutterBottom>
                    Lihat Agenda
                    Bimtek Pengelola Database TA 2020
                </Typography>
                <Button variant="contained" color="primary">Lihat Agenda Bimtek</Button>
            </Container>


            

        </div>
    )
}



export default Home
