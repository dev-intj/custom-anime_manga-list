import React from 'react'

function AnimeCard({ anime }) {
    return (
        <div class="card-view">
            <div class="card-header " style={{
                backgroundImage: `url(${anime.image_url})`
            }}>
                <div class="card-header-icon">
                    <a href="#">
                        <i class="material-icons header-icon"></i>
                    </a>
                </div>
            </div>

            <div class="card-movie-content">
                <div class="card-movie-content-head">
                    <a href="#">
                        <h3 class="card-movie-title">{anime.title}</h3>
                    </a>
                    <div class="ratings"><span>{anime.score}</span>/10</div>
                </div>
                <div class="card-movie-info">
                    <div class="movie-running-time">
                        <label>Last update</label>
                        <span>Sun 8 Sept - 10:00PM</span>
                    </div>
                    <div class="movie-running-time">
                        <label>Running time</label>
                        <span>2hr 09min</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AnimeCard
