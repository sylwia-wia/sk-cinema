import Datetime from "react-datetime";
import React, {useState} from "react";
import moment from "moment/moment";
import 'moment/locale/pl';
import {useForm, Controller} from "react-hook-form";

export default function ShowForm(props) {
    const {show, movies, rooms} = props;
    const isEditing = show !== undefined;

    const [movieID, setMovieID] = useState(isEditing ? show.movieID : '');
    const [roomID, setRoomID] = useState(isEditing ? show.roomID : '');

    const {register, handleSubmit, control, formState: {errors}} = useForm({
        criteriaMode: "all",
        defaultValues: {showDate: (isEditing ? moment(show.showDate) : '')}
    });

    const onSubmit = (data) => {
        props.onFormSubmitHandler({
            showDate: data.showDate.format('YYYY-MM-DD HH:mm:ss'),
            movieID: parseInt(movieID),
            roomID: parseInt(roomID)

        });
    };

    const moviesOptions = movies.map(movie =>
        <option key={movie.movieID} value={movie.movieID}>{movie.movieTitle}</option>
    )

    const roomsOptions = rooms.map(room =>
        <option key={room.roomID} value={room.roomID}>{room.roomNumber}</option>
    )

    const compareDate = (showDate) => {
        const nowDate = moment().format('YYYY-MM-DD HH:mm:ss');

        moment(showDate).format('YYYY-MM-DD HH:mm:ss');

        if (showDate?.isAfter(nowDate)) {
            return true;
        }
        return "Wybierz późniejszą datę ";

    }

    const showValidation = {
        showDate: {
            required: "Wybierz datę i godzinę seansu",
            validate: compareDate
        },
        movieTitle: {
            required: "Wybierz tytuł filmu"
        },
        roomNumber: {
            required: "Podaj numer sali"
        }
    }


    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                    <label className="form-label">Data i godzina</label>
                    <Controller
                        name="showDate"
                        control={control}
                        required
                        rules={showValidation.showDate}
                        render={({field}) => (
                            <Datetime locale="pl"
                                      {...field}
                            />
                        )}
                    />

                </div>
                <p className="fw-bold text-danger">{errors.showDate?.message}</p>
                <div className="mb-3">
                    <label className="form-label">Film</label>
                    <select  {...register("movieTitle", showValidation.movieTitle)}
                             className="form-control"
                             onChange={e => setMovieID(e.target.value)}
                             value={movieID}
                    >
                        <option></option>
                        {moviesOptions}
                    </select>
                </div>
                <p className="fw-bold text-danger">{errors.movieTitle?.message}</p>

                <div className="mb-3">
                    <label className="form-label">Sala</label>
                    <select {...register("roomNumber", showValidation.roomNumber)}
                            className="form-control"
                            onChange={e => setRoomID(e.target.value)}
                            value={roomID}
                    >
                        <option></option>
                        {roomsOptions}
                    </select>
                </div>
                <p className="fw-bold text-danger">{errors.roomNumber?.message}</p>

                <button type="submit" className="btn btn-dark mb-3 px-3">
                    Utwórz
                </button>
            </form>
        </>
    );
}