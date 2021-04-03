import React from 'react';
import axios from 'axios';
import { withRouter } from "react-router";

import AnimeCard from '../components/AnimeCard';
import Header from '../components/Header';

class AnimeList extends React.Component {
    constructor() {
        super();

        this.state = {
            data: [],
            currentPage: 1,
            ItemsPerPage: 9,
        }
        this.handleClick = this.handleClick.bind(this);
    }
    componentDidMount() {
        const id = this.props.match.params.id;
        axios.get(`https://api.jikan.moe/v3/user/${id}/animelist`)
            .then(res => {
                const data = res.data.anime;
                this.setState({ data });
            })
            .catch(error => {
                console.log("there was an error fetching from my anime list.")
            });
    }
    handleClick(event) {
        this.setState({
            currentPage: Number(event.target.id)
        });
    }
    render() {
        const { data, currentPage, ItemsPerPage } = this.state;
        // Logic for displaying current todos
        const indexOfLastItem = currentPage * ItemsPerPage;
        const indexOfFirstItem = indexOfLastItem - ItemsPerPage;
        const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

        const renderItems = currentItems.map((anime) => {
            return <AnimeCard anime={anime} key={anime.mal_id} />
        });

        // Logic for displaying page numbers
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(data.length / ItemsPerPage); i++) {
            pageNumbers.push(i);
        }
        const renderPageNumbers = pageNumbers.map(number => {
            return /*#__PURE__*/(
                React.createElement("li", {
                    key: number,
                    id: number,
                    onClick: this.handleClick
                },

                    number));


        });
        return (
            <>
                <Header />
                <div className="container">
                    <div className="col-md-8 col-lg-10 pt-5 mt-5">
                            {React.createElement("div",{className:"row align-items-center justify-content-center"}, null,renderItems,/*#__PURE__*/

                                React.createElement("ul", { id: "page-numbers" },
                                    renderPageNumbers))}
                    </div>
                </div>
            </>
        )
    }
}
export default withRouter(AnimeList);