import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Typography, IconButton, Grid, Dialog, DialogTitle, DialogContent, DialogContentText } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { Share, Bookmark, Close as CloseIcon } from '@material-ui/icons/'
import Router from 'next/router'

import { getMovie, detailMovie } from '../components/Api'
import Layout from '../components/Layout'
import DetailMovie from '../components/DetailMovie'

const styles = theme => ({
    card: {
        maxWidth: 280,
        margin: 10,
        position: 'relative',
        paddingBottom: 50
    },
    media: {
        height: 150,
    },
    action: {
        position: 'absolute',
        bottom: 0,
        right: 0
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
    },
    detailDescription: {
        marginTop: 25
    }
});

class Page extends Component {

    state = {
        dialog: false,
        movies: [],
        detail: {}
    }

    async componentDidMount() {
        let resMovies = await getMovie();
        console.log(resMovies);

        this.setState({
            movies: resMovies
        })
    }

    synopsis = (string) => {
        if (string.length < 100) {
            return string;
        } else {
            return string.slice(0, 100) + ' ... ';
        }
    }

    detailMovie = async (id) => {
        let resDetail = await detailMovie(id);
        console.log(resDetail);

        this.setState({
            detail: resDetail,
            dialog: true
        });

        let title = resDetail.title.replace(" ", "-");
        Router.replace('/', `movie/${resDetail.id}/${title}`, { shallow: true });
    }

    closeDetail = () => {
        this.setState({
            dialog: false
        });

        Router.replace('/', `/`, { shallow: true });
    }

    render() {
        let { classes } = this.props;
        let { dialog, movies, detail } = this.state;

        return <Layout>
            <Grid container alignItems={'stretch'} justify="center" >

                {
                    movies.map((movie, i) => (
                        <Grid item xs={12} sm={4} md={3} component={Card} raised className={classes.card} key={i}>
                            <CardActionArea onClick={() => this.detailMovie(movie.id)}>
                                <CardMedia
                                    className={classes.media}
                                    image={`/img/${movie.thumbnail}`}
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h6">
                                        {movie.title}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {this.synopsis(movie.description)}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions className={classes.action}>
                                <IconButton color="primary">
                                    <Share />
                                </IconButton>
                                <IconButton color="secondary">
                                    <Bookmark />
                                </IconButton>
                            </CardActions>
                        </Grid>
                    ))
                }

            </Grid>

            {/* DETAIL MOVIE COMPONENT */}
            <DetailMovie detail={detail} dialog={dialog} _closeDetail={this.closeDetail} classes={classes} />

        </Layout>
    }
}

Page.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Page)