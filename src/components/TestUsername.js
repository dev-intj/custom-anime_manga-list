import React from 'react';
import axios from 'axios';
import AnimeCard from './AnimeCard';
import { withRouter } from "react-router";
import Header from './Header'

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
        const id = this.props.match.params.id;
        return (
            <>
                <Header />
                <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4 movie_list">
                    <div class="pt-8 pb-2 mb-3 border-bottom">
                        <div class="row">
                            {this.state.data.map(anime =>

                                <AnimeCard anime={anime} key={anime.mal_id} />

                            )}
                        </div>
                    </div></main>
            </>
        )
    }
}
export default withRouter(TestUsername);
{/*"anime":
[{"mal_id":34572,
"title":"Black Clover",
"video_url":"https:\/\/myanimelist.net\/anime\/34572\/Black_Clover\/video",
"url":"https:\/\/myanimelist.net\/anime\/34572\/Black_Clover",
"image_url":"https:\/\/cdn.myanimelist.net\/images\/anime\/2\/88336.jpg?s=fe950e4ce27448bbdcd25353f68283ab",
"type":"TV",
"watching_status":1,
"score":8,
"watched_episodes":170,
"total_episodes":170,
"airing_status":2,
"season_name":null,
"season_year":null,
"has_episode_video":true,
"has_promo_video":true,
"has_video":true,
"is_rewatching":false,
"tags":null,
"rating":"PG-13",
"start_date":"2017-03-10T00:00:00+00:00",
"end_date":"2023-06-03T00:00:00+00:00",
"watch_start_date":null,
"watch_end_date":null,
"days":null,
"storage":null,
"priority":"Low",
"added_to_list":false,
"studios":[],
"licensors":[]},*/}