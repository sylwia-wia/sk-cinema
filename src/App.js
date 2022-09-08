import './App.css';
import AppLayout from "./AppLayout"
import React, {useEffect, useRef} from "react";
import {getAllMovies} from "./redux/movie/actions";
import {getAllRooms} from "./redux/room/actions";
import {useDispatch, useSelector} from "react-redux";
import 'bootstrap/dist/js/bootstrap';
import {getAllShows} from "./redux/show/actions";

function App() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllMovies());
        dispatch(getAllRooms());
        dispatch(getAllShows());
    }, [])

    const errorMessage = useSelector((state) => state.app.errorMessage);
    const isLoading = useSelector((state) => state.app.isLoading);

     return (
        <>
            <AppLayout/>

            {errorMessage !== null ?
                <div className={'row error-view'} >
                    <div className="col alert alert-danger alert-dismissible fade show mx-4" role="alert">
                        {errorMessage}
                        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" ></button>
                    </div>
                </div>
                : ''
            }

            {isLoading === true ?
                <div className={'row'}>
                    <div className={'col-12 text-center'}>
                        <span className="spinner-border spinner-border-sm"  style={{width: '3rem', height: '3rem',  position: "fixed", top: "50%", left: "50%"}} role="status" aria-hidden="true"></span>
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
                : ''
            }
        </>
    );
}

export default App;
