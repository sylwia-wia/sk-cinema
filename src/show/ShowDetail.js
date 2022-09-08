import moment from "moment/moment";
import "./ShowDetail.css";
import {confirmAlert} from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import {useNavigate, useParams} from "react-router-dom";
import React from "react";
import {useSelector} from "react-redux";

export default function ShowDetail(props) {
    //const {show} = props;
    const navigate = useNavigate();
    const {showID} = useParams();
    const show = useSelector((state) => state.show[showID]);

    if (show === undefined) {
        return '';
    }

    function handleSeatClick(seatNumber) {
        if (show.showSeats[seatNumber].ticket !== null) {
            return;
        }

        const confirm = {
            title: 'Potwierdź zakup biletu',
            message: 'Czy chcesz kupić bilet?',
            buttons: [
                {
                    label: 'Tak',
                    onClick: () => {
                        props.onFormSubmitHAndler(showID, seatNumber);
                        navigate(`/show/${showID}/ticket/${seatNumber}`)
                    }
                },
                {
                    label: 'Nie',
                    onClick: () => {
                        navigate(`/show/buy/${showID}`)
                    }
                }
            ],

        };


        confirmAlert(confirm);
    }

    const seatCards = Object.values(show.showSeats).map(seat => {
        const bgColor = seat.ticket !== null ? 'bg-secondary' : 'bg-success';
        //console.log(show.showSeats[seat].ticket);
        return (
            <div className="col-1" key={seat.id}>
                <div className={`${bgColor} d-inline-flex ms-4 p-4 mt-4 me-3 justify-content-center seat`}
                     onClick={() => handleSeatClick(seat.number)}
                     role={`${seat.ticket === null ? 'button' : ''}`}
                >
                    {seat.number}
                </div>
            </div>
        );
    });

    return (
        <>
            <div className={"card"}>
                <div className={"card-header"}><h5>{show.movie.movieTitle}</h5></div>
                <div className={"card-body"}>

                    <h5 className={"card-title"}>{moment(show.startTime).format('DD-MM-YYYY')}</h5>
                    <h5 className={"card-title"}>{moment(show.startTime).format('HH:mm:ss')} -> {moment(show.endTime).format('HH:mm:ss')}</h5>
                    <h5 className={"card-title"}>Czas trwania: {show.movie.movieTime} min </h5>
                    <h5 className={"card-title"}>Sala: {show.room.roomNumber}</h5>
                </div>
            </div>

            <div className={`row row-cols-8 g-10 me-4`}>
                {seatCards}
            </div>

        </>
    )
}