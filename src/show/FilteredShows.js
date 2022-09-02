import moment from "moment/moment";
import {Link, useNavigate} from "react-router-dom";
import {Pencil, Trash3} from "react-bootstrap-icons";
import React from "react";
import {showDelete} from "../redux/show/actions";
import {useDispatch} from "react-redux";


export default function FilteredShows(props) {
    const {filterShow} = props;
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function onClickRemoveHandler(showID) {
        dispatch(showDelete(showID));
        navigate('/show')
    }

    const rekordyTabeli = Object.values(filterShow).map((show, index) => {
        const bgColor = moment().isAfter(show.startTime) && moment().isBefore(show.endTime) ? 'bg-warning' : '';

        return (
            <tr key={index} className={bgColor}>
                <td>
                    {index + 1}
                </td>
                <td>
                    {show.movie.title}
                </td>
                <td>
                    {show.room.roomNumber}
                </td>
                <td>
                    {show.room.capacity}
                </td>
                <td>

                    {show.movie.duration}
                </td>
                <td>
                    {moment(show.showDate).format('YYYY-MM-DD HH:mm')}
                </td>
                <td>

                    <button className="btn btn-btn-dark px-2 float-end">
                        <Link to={`update/${show.showID}`} key={show.showID} className={'me-2 link-dark'}><Pencil/>
                        </Link>
                    </button>
                    <button onClick={() => onClickRemoveHandler(show.showID)}
                            className="btn btn-btn-dark px-2 float-end">
                        <Trash3/>
                    </button>
                    <Link to={`buy/${show.showID}`} key={show.showID} className={'me-2 link-dark'}>
                        <button className="btn btn-dark px-2 float-end">
                            Kup bilet
                        </button>
                    </Link>
                </td>

            </tr>
        )

    });

    return (
      <>
          {rekordyTabeli}

      </>
    );
}