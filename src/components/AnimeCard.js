import React from 'react'

function AnimeCard({ anime }) {
    return (
        <div className="card-view">
            <div className="card-header " style={{
                backgroundImage: `url(${anime.image_url})`
            }}>
                <div className="card-header-icon">
                    <a href="#">
                        <i className="material-icons header-icon"></i>
                    </a>
                </div>
            </div>

            <div className="card-movie-content">
                <div className="card-movie-content-head">
                    <a href="#">
                        <h3 className="card-movie-title">{anime.title}</h3>
                    </a>
                    <div className="ratings"><span>{anime.score}</span>/10</div>
                </div>
                <div className="card-movie-info">
                    <div className="movie-running-time">
                        <label>Last update</label>
                        <span>Sun 8 Sept - 10:00PM</span>
                    </div>
                    <div className="movie-running-time">
                        <label>Running time</label>
                        <span>2hr 09min</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AnimeCard
