import React from 'react';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Typography, IconButton, Grid, Dialog, DialogTitle, DialogContent, DialogContentText } from '@material-ui/core';
import { Close as CloseIcon } from '@material-ui/icons/';

const DetailMovie = (props) => {
    let { detail, dialog, _closeDetail, classes } = props;

    return (
        <Dialog
            open={dialog}
            onClose={_closeDetail}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">

                {detail.title}
                <IconButton aria-label="close" className={classes.closeButton} onClick={_closeDetail}>
                    <CloseIcon />
                </IconButton>

            </DialogTitle>
            <DialogContent>

                <CardMedia
                    component="iframe"
                    height="300"
                    src={`https://www.youtube.com/embed/${detail.trailer}`}
                />

                <DialogContentText id="alert-dialog-description" className={classes.detailDescription}>
                    {detail.description}
                </DialogContentText>
            </DialogContent>
        </Dialog>
    );
};

export default DetailMovie