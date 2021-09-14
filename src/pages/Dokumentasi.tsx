import { Container, makeStyles, Typography } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles((theme) => ({
    container: {
        padding: theme.spacing(4),
    }
}));

export default function Dokumentasi() {
    const classes = useStyles();
    return (
        <div>
            <Container className={classes.container} maxWidth="sm">
                <Typography component="h1" variant="h4" align="center" color="textPrimary" gutterBottom>
                    Dokumentasi Bimtek
                </Typography>
                <Typography variant="subtitle1" color="textSecondary" align="center" gutterBottom>Belum ada konten yang diunggah</Typography>
            </Container>
            
        </div>
    )
}
