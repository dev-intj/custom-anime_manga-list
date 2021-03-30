import React from 'react';
import axios from 'axios';
import { withRouter } from "react-router";

class Header extends React.Component {
    state = {
        data: []
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        axios.get(`https://api.jikan.moe/v3/user/${id}`)
            .then(res => {
                const data = res.data;
                this.setState({ data });
            })
    }
    render() {
        return (
            <div className="header">
                <h1>{this.state.data.username}</h1>
            </div>
        )
    }
}
export default withRouter(Header);