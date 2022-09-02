import React from "react";
import {useNavigate, useParams} from "react-router-dom";
import ShowDetail from "../show/ShowDetail";
import {ticketBuy} from "../redux/show/actions";
import {useDispatch, useSelector} from "react-redux";

export default function Buy (props) {
    const {addTicket} = props;
    const {showID} = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const shows = useSelector((state) => state.show);
    const show = useSelector((state) => state.show[showID]);

    function onFormSubmitHandler(showID, seatID) {
        dispatch(ticketBuy({
            showID,
            seatID
        }));
         navigate('/show')
    }

    return (
        <>
            <ShowDetail onFormSubmitHAndler={onFormSubmitHandler} shows={shows} show={show} addTicket={addTicket}/>
        </>
    );

}