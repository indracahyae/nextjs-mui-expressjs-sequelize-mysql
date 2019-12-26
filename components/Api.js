import axios from 'axios'

export const getMovie = () =>
    axios
        .get(`/api/getMovie`)
        .then((res) => {
            return res.data;
        })
        .catch((error) => {
            return {
                status: false,
                data: error
            };
        });

export const detailMovie = (id) =>
    axios
        .get(`/api/detailMovie/${id}`)
        .then((res) => {
            return res.data;
        })
        .catch((error) => {
            return {
                status: false,
                data: error
            };
        });