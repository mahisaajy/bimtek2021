import { Button, Container, Grid, Typography } from '@material-ui/core'
import React from 'react'

export default function Test() {
    return (
        <div>
            <Container maxWidth="sm">
                <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
                    Materi
                </Typography>
                <Typography variant="h5" align="center" color="textSecondary" paragraph>
                    Hello everyone . Hello everyone . Hello everyone . Hello everyone . Hello everyone . Hello everyone . Hello everyone .
                </Typography>

                <div>
                    <Grid container spacing={2} justify="center">
                        <Grid item>
                            <Button variant="contained" color="primary">
                                See my photos
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button variant="contained" color="secondary">
                                Secondary Action
                            </Button>
                        </Grid>
                    </Grid>
                </div>
            </Container>
        </div>
    )
}
