import {useParams} from "react-router-dom";
import MovieForm from "./MovieForm";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {UPDATE_MOVIE} from "../redux/movie/actions";

export default function MovieUpdate() {
    const navigate = useNavigate();
    const {movieID} = useParams();
    const dispatch = useDispatch();
    const movie = useSelector(state => state.movie[movieID]);
    const movies = Object.values(useSelector(state => state.movie));


    function onFormSubmitHandler(formData) {
        formData.movieID = movie.movieID;
        dispatch(UPDATE_MOVIE(formData));
        navigate('/movie')
    }

    return <MovieForm movie={movie} onFormSubmitHandler={onFormSubmitHandler} movies={movies}/>;

}

