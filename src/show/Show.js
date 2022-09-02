import React, {useState} from "react";
import {Table} from "react-bootstrap";
import {Link} from "react-router-dom";
import FilteredShows from "./FilteredShows";
import { useSelector} from "react-redux";

export default function Show() {
    const [filteredMovies, setFilteredMovies] = useState('');
    const shows = useSelector((store) => store.show);

    let filterByMovie;
    if(shows){
        Object.values(shows).filter(movieTitle => movieTitle.movie.title===filteredMovies);
    }

     if (filteredMovies) {
        const filteringMovies = Object.values(shows).filter(movieTitle => movieTitle.movie.title.toLowerCase().includes(filteredMovies.toLowerCase()));
        if (filteringMovies) {
            filterByMovie = [<FilteredShows key={filteredMovies} filterShow={filteringMovies} />];
        } else {
            filterByMovie = (
                <h3 className={'text-center text-muted mt-5'}>
                    Nie znaleziono seansu dla takiego filmu!
                </h3>
            );
        }
    }
    else
        filterByMovie = [<FilteredShows key={shows} filterShow={shows} />]


     return (
        <>
            <h2 className="px-3">Seanse</h2>

            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Wyszukaj film"
                       aria-label="Search movie" aria-describedby="search"
                       value={filteredMovies}
                       onChange={(e) =>  setFilteredMovies(e.target.value)}
                />
                    <div className="input-group-append">
                        <button className="btn btn-dark  float-end" id="search" onClick={()=>setFilteredMovies('')}>Wyczyść</button>
                    </div >
            </div>


            <Link to="/show/create">
                <button className="btn btn-dark mb-3 px-3 float-end">
                    Dodaj nowy seans
                </button>
            </Link>
            <Table striped bordered>
                <thead className="thead-dark">
                <tr>
                    <th>#</th>
                    <th>Film</th>
                    <th>Sala</th>
                    <th>Ilość miejsc</th>
                    <th>Czas trwania</th>
                    <th>Data</th>
                </tr>

                </thead>
                <tbody>
                {filterByMovie}
                </tbody>

            </Table>
            <p></p>

        </>
    );
}