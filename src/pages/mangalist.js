import React from 'react';
import axios from 'axios';
import { withRouter } from "react-router";

import AnimeCard from '../components/AnimeCard';
import Header from '../components/Header';

class MangaList extends React.Component {
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
        const id = this.props.match.params.id;
        return (
            <>
                <Header />
                <main role="main" className="col-md-9 ml-sm-auto col-lg-10 movie_list">
                    <div className="pt-8 pb-2 mb-3 border-bottom">
                        <div className="row">
                            {this.state.data.map(anime =>

                                <AnimeCard anime={anime} key={anime.mal_id} />

                            )}
                        </div>
                    </div></main>
            </>
        )
    }
}
export default withRouter(MangaList);