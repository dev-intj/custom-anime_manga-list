import React from 'react';
import axios from 'axios';
import AnimeCard from './TestAnimeCard';
import { withRouter } from "react-router";

class TestUsername extends React.Component {
    state = {
        data: []
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        axios.get(`https://api.jikan.moe/v3/user/${id}/animelist`)
            .then(res => {
                const data = res.data.anime;
                this.setState({ data });
            })
    }
    render() {
        return (
            <ul>
                { this.state.data.map(anime => <li>{anime.title}</li>)}
            </ul>
        )
    }
}
export default withRouter(TestUsername);