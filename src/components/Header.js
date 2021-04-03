import React from 'react';
import axios from 'axios';
import { withRouter } from "react-router";

class Header extends React.Component {
    state = {
        data: [],
        user_stats:[]
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        axios.get(`https://api.jikan.moe/v3/user/${id}`)
            .then(res => {
                const data = res.data;
                const user_stats = res.data.anime_stats;
                this.setState({ data });
                this.setState({ user_stats });
                console.log({user_stats})
            })
            
    }
    render() {
        return (
            <div className="container align-items-center justify-content-center">
              <div className="col-md-6 col-lg-8 mx-auto  pt-5 mt-5">
                   {/*pb-8 pt-5 pt-lg-8 d-flex mt-5  */}
                <div className="header header-profile shadow">
                  <div className="row justify-content-center">
                    <div className="col-lg-3 order-lg-2">
                      <div className="header-profile-image">
                        <a href="#">
                          <img src={this.state.data.image_url} className="rounded-circle"/>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="header-body pt-5 mt-5">
                    <div className="row">
                      <div className="col">
                        <div className="header-profile-stats pt-5 mt-5 pb-5 mt-5">
                          <div className="row d-flex justify-content-around">
                            
                          <div className="col col-lg-2 text-align-center align-items-center">
                          <div className="heading">{this.state.user_stats.episodes_watched}</div><br/>
                            <div className="description">Episodes Watched</div>
                          </div>
                          <div className="col col-lg-2 text-align-center align-items-center">
                            <div className="heading">{this.state.user_stats.total_entries}</div><br/>
                            <div className="description">Entries</div>
                          </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="text-center">
                      <h3>
                        {this.state.data.username}
                      </h3>
                      <div className="h5 font-weight-300">
                        <i className="ni location_pin mr-2"></i>Bucharest, Romania
                      </div>
                      <div className="h5 mt-4">
                        <i className="ni business_briefcase-24 mr-2"></i>Solution Manager - Creative Tim Officer
                      </div>
                      <div>
                        <i className="ni education_hat mr-2"></i>University of Computer Science
                      </div>
                      <p>Ryan — the name taken by Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and records all of his own music.</p>
                      <a href="#">Show more</a>
                    </div>
                  </div>
                </div>
              </div></div>
        )
    }
}
export default withRouter(Header);
{/* 
"username":"SnakeInMyBoots",
"url":"https:\/\/myanimelist.net\/profile\/SnakeInMyBoots",
"image_url":"https:\/\/cdn.myanimelist.net\/images\/userimages\/11774578.jpg?t=1617290400",
"last_online":"2021-04-01T15:29:49+00:00",
"gender":null,
"birthday":null,
"location":null,
"joined":"2021-02-12T00:00:00+00:00",

"anime_stats":
{"days_watched":31,
"mean_score":6.58,
"watching":9,
"completed":96,
"on_hold":0,
"dropped":0,
"plan_to_watch":0,
"total_entries":105,
"rewatched":0,
"episodes_watched":1944},

"manga_stats":
{"days_read":0.5,
"mean_score":9,
"reading":1,
"completed":0,
"on_hold":0,
"dropped":0,
"plan_to_read":0,
"total_entries":1,
"reread":0,
"chapters_read":0,
"volumes_read":9},

"favorites":
{"anime":[],
"manga":[],
"characters":[],
"people":[]},
"about":null}
*/}