import React from 'react'
import RoomRow from './RoomRow'
import { roomSorter } from '../helpers/sorter'
import { Link } from 'react-router-dom'
import { bookingArray, dailyBookings, formatAssetName } from '../helpers/rooms'

const RoomsList = props => (
  <table className="table">
    <tr className="table__row table__row--header">
      <th scope="colgroup" colSpan="8" className="table__cell--header table__cell--level table__cell--align-left">
        Social Worker (Test)
      </th>
    </tr>
    <tr className="table__row table__row--subheader">
      <th scope="col" className="table__cell--header table__cell--align-left">

      </th>
      <th scope="col" className="table__cell--header">
        Sunday
      </th>
      <th scope="col" className="table__cell--header">
        Monday
      </th>
      <th scope="col" className="table__cell--header">
        Tuesday
      </th>
      <th scope="col" className="table__cell--header">
        Wednesday
      </th>
      <th scope="col" className="table__cell--header">
        Thursday
      </th>
      <th scope="col" className="table__cell--header">
        Friday
      </th>
      <th scope="col" className="table__cell--header">
        Saturday
      </th>
    </tr>
    <tbody className="table__body">
{/*
      {props.rooms &&
          roomSorter(props.rooms, '8').map(room => (
            <RoomRow
              key={room._id}
              room={room}
              bookings={room.bookings}
              date={props.date === null ? new Date() : props.date}
              onShowBooking={props.onShowBooking}
              onSetRoom={props.onSetRoom}
            />
          ))}
*/}
      <tr className="table__row">
        <th scope="row" className="table__cell--align-left">
          8am
        </th>
        <td>
          <Link to="/createbooking" onClick={() => {
            props.onSetRoom(props.room._id)
          }} className="table__link--available">
            &nbsp;
          </Link>
        </td>
        <td>
          <Link to="/createbooking" onClick={() => {
            props.onSetRoom(props.room._id)
          }} className="table__link--available">
            &nbsp;
          </Link>
        </td>
        <td>
          <Link to="/createbooking" onClick={() => {
            props.onSetRoom(props.room._id)
          }} className="table__link--available">
            &nbsp;
          </Link>
        </td>
        <td>
          <Link to="/createbooking" onClick={() => {
            props.onSetRoom(props.room._id)
          }} className="table__link--available">
            &nbsp;
          </Link>
        </td>
        <td>
          <Link to="/createbooking" onClick={() => {
            props.onSetRoom(props.room._id)
          }} className="table__link--available">
            &nbsp;
          </Link>
        </td>
        <td>
          <Link to="/createbooking" onClick={() => {
            props.onSetRoom(props.room._id)
          }} className="table__link--available">
            &nbsp;
          </Link>
        </td>
        <td>
          <Link to="/createbooking" onClick={() => {
            props.onSetRoom(props.room._id)
          }} className="table__link--available">
            &nbsp;
          </Link>
        </td>
      </tr>
      <tr className="table__row">
        <th scope="row" className="table__cell--align-left">
          9am
        </th>
        <td>
          <Link to="/createbooking" onClick={() => {
            props.onSetRoom(props.room._id)
          }} className="table__link--available">
            &nbsp;
          </Link>
        </td>
        <td>
          <Link to="/createbooking" onClick={() => {
            props.onSetRoom(props.room._id)
          }} className="table__link--available">
            &nbsp;
          </Link>
        </td>
        <td>
          <Link to="/createbooking" onClick={() => {
            props.onSetRoom(props.room._id)
          }} className="table__link--available">
            &nbsp;
          </Link>
        </td>
        <td>
          <Link to="/createbooking" onClick={() => {
            props.onSetRoom(props.room._id)
          }} className="table__link--available">
            &nbsp;
          </Link>
        </td>
        <td>
          <Link to="/createbooking" onClick={() => {
            props.onSetRoom(props.room._id)
          }} className="table__link--available">
            &nbsp;
          </Link>
        </td>
        <td>
          <Link to="/createbooking" onClick={() => {
            props.onSetRoom(props.room._id)
          }} className="table__link--available">
            &nbsp;
          </Link>
        </td>
        <td>
          <Link to="/createbooking" onClick={() => {
            props.onSetRoom(props.room._id)
          }} className="table__link--available">
            &nbsp;
          </Link>
        </td>
      </tr>
      <tr className="table__row">
        <th scope="row" className="table__cell--align-left">
          10am
        </th>
        <td>
          <Link to="/createbooking" onClick={() => {
            props.onSetRoom(props.room._id)
          }} className="table__link--available">
            &nbsp;
          </Link>
        </td>
        <td>
          <Link to="/createbooking" onClick={() => {
            props.onSetRoom(props.room._id)
          }} className="table__link--available">
            &nbsp;
          </Link>
        </td>
        <td>
          <Link to="/createbooking" onClick={() => {
            props.onSetRoom(props.room._id)
          }} className="table__link--available">
            &nbsp;
          </Link>
        </td>
        <td>
          <Link to="/createbooking" onClick={() => {
            props.onSetRoom(props.room._id)
          }} className="table__link--available">
            &nbsp;
          </Link>
        </td>
        <td>
          <Link to="/createbooking" onClick={() => {
            props.onSetRoom(props.room._id)
          }} className="table__link--available">
            &nbsp;
          </Link>
        </td>
        <td>
          <Link to="/createbooking" onClick={() => {
            props.onSetRoom(props.room._id)
          }} className="table__link--available">
            &nbsp;
          </Link>
        </td>
        <td>
          <Link to="/createbooking" onClick={() => {
            props.onSetRoom(props.room._id)
          }} className="table__link--available">
            &nbsp;
          </Link>
        </td>
      </tr>
      <tr className="table__row">
        <th scope="row" className="table__cell--align-left">
          11am
        </th>
        <td>
          <Link to="/createbooking" onClick={() => {
            props.onSetRoom(props.room._id)
          }} className="table__link--available">
            &nbsp;
          </Link>
        </td>
        <td>
          <Link to="/createbooking" onClick={() => {
            props.onSetRoom(props.room._id)
          }} className="table__link--available">
            &nbsp;
          </Link>
        </td>
        <td>
          <Link to="/createbooking" onClick={() => {
            props.onSetRoom(props.room._id)
          }} className="table__link--available">
            &nbsp;
          </Link>
        </td>
        <td>
          <Link to="/createbooking" onClick={() => {
            props.onSetRoom(props.room._id)
          }} className="table__link--available">
            &nbsp;
          </Link>
        </td>
        <td>
          <Link to="/createbooking" onClick={() => {
            props.onSetRoom(props.room._id)
          }} className="table__link--available">
            &nbsp;
          </Link>
        </td>
        <td>
          <Link to="/createbooking" onClick={() => {
            props.onSetRoom(props.room._id)
          }} className="table__link--available">
            &nbsp;
          </Link>
        </td>
        <td>
          <Link to="/createbooking" onClick={() => {
            props.onSetRoom(props.room._id)
          }} className="table__link--available">
            &nbsp;
          </Link>
        </td>
      </tr>
      <tr className="table__row">
        <th scope="row" className="table__cell--align-left">
          12nn
        </th>
        <td>
          <Link to="/createbooking" onClick={() => {
            props.onSetRoom(props.room._id)
          }} className="table__link--available">
            &nbsp;
          </Link>
        </td>
        <td>
          <Link to="/createbooking" onClick={() => {
            props.onSetRoom(props.room._id)
          }} className="table__link--available">
            &nbsp;
          </Link>
        </td>
        <td>
          <Link to="/createbooking" onClick={() => {
            props.onSetRoom(props.room._id)
          }} className="table__link--available">
            &nbsp;
          </Link>
        </td>
        <td>
          <Link to="/createbooking" onClick={() => {
            props.onSetRoom(props.room._id)
          }} className="table__link--available">
            &nbsp;
          </Link>
        </td>
        <td>
          <Link to="/createbooking" onClick={() => {
            props.onSetRoom(props.room._id)
          }} className="table__link--available">
            &nbsp;
          </Link>
        </td>
        <td>
          <Link to="/createbooking" onClick={() => {
            props.onSetRoom(props.room._id)
          }} className="table__link--available">
            &nbsp;
          </Link>
        </td>
        <td>
          <Link to="/createbooking" onClick={() => {
            props.onSetRoom(props.room._id)
          }} className="table__link--available">
            &nbsp;
          </Link>
        </td>
      </tr>
      <tr className="table__row">
        <th scope="row" className="table__cell--align-left">
          1pm
        </th>
        <td>
          <Link to="/createbooking" onClick={() => {
            props.onSetRoom(props.room._id)
          }} className="table__link--available">
            &nbsp;
          </Link>
        </td>
        <td>
          <Link to="/createbooking" onClick={() => {
            props.onSetRoom(props.room._id)
          }} className="table__link--available">
            &nbsp;
          </Link>
        </td>
        <td>
          <Link to="/createbooking" onClick={() => {
            props.onSetRoom(props.room._id)
          }} className="table__link--available">
            &nbsp;
          </Link>
        </td>
        <td>
          <Link to="/createbooking" onClick={() => {
            props.onSetRoom(props.room._id)
          }} className="table__link--available">
            &nbsp;
          </Link>
        </td>
        <td>
          <Link to="/createbooking" onClick={() => {
            props.onSetRoom(props.room._id)
          }} className="table__link--available">
            &nbsp;
          </Link>
        </td>
        <td>
          <Link to="/createbooking" onClick={() => {
            props.onSetRoom(props.room._id)
          }} className="table__link--available">
            &nbsp;
          </Link>
        </td>
        <td>
          <Link to="/createbooking" onClick={() => {
            props.onSetRoom(props.room._id)
          }} className="table__link--available">
            &nbsp;
          </Link>
        </td>
      </tr>
      <tr className="table__row">
        <th scope="row" className="table__cell--align-left">
          2pm
        </th>
        <td>
          <Link to="/createbooking" onClick={() => {
            props.onSetRoom(props.room._id)
          }} className="table__link--available">
            &nbsp;
          </Link>
        </td>
        <td>
          <Link to="/createbooking" onClick={() => {
            props.onSetRoom(props.room._id)
          }} className="table__link--available">
            &nbsp;
          </Link>
        </td>
        <td>
          <Link to="/createbooking" onClick={() => {
            props.onSetRoom(props.room._id)
          }} className="table__link--available">
            &nbsp;
          </Link>
        </td>
        <td>
          <Link to="/createbooking" onClick={() => {
            props.onSetRoom(props.room._id)
          }} className="table__link--available">
            &nbsp;
          </Link>
        </td>
        <td>
          <Link to="/createbooking" onClick={() => {
            props.onSetRoom(props.room._id)
          }} className="table__link--available">
            &nbsp;
          </Link>
        </td>
        <td>
          <Link to="/createbooking" onClick={() => {
            props.onSetRoom(props.room._id)
          }} className="table__link--available">
            &nbsp;
          </Link>
        </td>
        <td>
          <Link to="/createbooking" onClick={() => {
            props.onSetRoom(props.room._id)
          }} className="table__link--available">
            &nbsp;
          </Link>
        </td>
      </tr>
      <tr className="table__row">
        <th scope="row" className="table__cell--align-left">
          3pm
        </th>
        <td>
          <Link to="/createbooking" onClick={() => {
            props.onSetRoom(props.room._id)
          }} className="table__link--available">
            &nbsp;
          </Link>
        </td>
        <td>
          <Link to="/createbooking" onClick={() => {
            props.onSetRoom(props.room._id)
          }} className="table__link--available">
            &nbsp;
          </Link>
        </td>
        <td>
          <Link to="/createbooking" onClick={() => {
            props.onSetRoom(props.room._id)
          }} className="table__link--available">
            &nbsp;
          </Link>
        </td>
        <td>
          <Link to="/createbooking" onClick={() => {
            props.onSetRoom(props.room._id)
          }} className="table__link--available">
            &nbsp;
          </Link>
        </td>
        <td>
          <Link to="/createbooking" onClick={() => {
            props.onSetRoom(props.room._id)
          }} className="table__link--available">
            &nbsp;
          </Link>
        </td>
        <td>
          <Link to="/createbooking" onClick={() => {
            props.onSetRoom(props.room._id)
          }} className="table__link--available">
            &nbsp;
          </Link>
        </td>
        <td>
          <Link to="/createbooking" onClick={() => {
            props.onSetRoom(props.room._id)
          }} className="table__link--available">
            &nbsp;
          </Link>
        </td>
      </tr>
      <tr className="table__row">
        <th scope="row" className="table__cell--align-left">
          4pm
        </th>
        <td>
          <Link to="/createbooking" onClick={() => {
            props.onSetRoom(props.room._id)
          }} className="table__link--available">
            &nbsp;
          </Link>
        </td>
        <td>
          <Link to="/createbooking" onClick={() => {
            props.onSetRoom(props.room._id)
          }} className="table__link--available">
            &nbsp;
          </Link>
        </td>
        <td>
          <Link to="/createbooking" onClick={() => {
            props.onSetRoom(props.room._id)
          }} className="table__link--available">
            &nbsp;
          </Link>
        </td>
        <td>
          <Link to="/createbooking" onClick={() => {
            props.onSetRoom(props.room._id)
          }} className="table__link--available">
            &nbsp;
          </Link>
        </td>
        <td>
          <Link to="/createbooking" onClick={() => {
            props.onSetRoom(props.room._id)
          }} className="table__link--available">
            &nbsp;
          </Link>
        </td>
        <td>
          <Link to="/createbooking" onClick={() => {
            props.onSetRoom(props.room._id)
          }} className="table__link--available">
            &nbsp;
          </Link>
        </td>
        <td>
          <Link to="/createbooking" onClick={() => {
            props.onSetRoom(props.room._id)
          }} className="table__link--available">
            &nbsp;
          </Link>
        </td>
      </tr>
      <tr className="table__row">
        <th scope="row" className="table__cell--align-left">
          5pm
        </th>
        <td>
          <Link to="/createbooking" onClick={() => {
            props.onSetRoom(props.room._id)
          }} className="table__link--available">
            &nbsp;
          </Link>
        </td>
        <td>
          <Link to="/createbooking" onClick={() => {
            props.onSetRoom(props.room._id)
          }} className="table__link--available">
            &nbsp;
          </Link>
        </td>
        <td>
          <Link to="/createbooking" onClick={() => {
            props.onSetRoom(props.room._id)
          }} className="table__link--available">
            &nbsp;
          </Link>
        </td>
        <td>
          <Link to="/createbooking" onClick={() => {
            props.onSetRoom(props.room._id)
          }} className="table__link--available">
            &nbsp;
          </Link>
        </td>
        <td>
          <Link to="/createbooking" onClick={() => {
            props.onSetRoom(props.room._id)
          }} className="table__link--available">
            &nbsp;
          </Link>
        </td>
        <td>
          <Link to="/createbooking" onClick={() => {
            props.onSetRoom(props.room._id)
          }} className="table__link--available">
            &nbsp;
          </Link>
        </td>
        <td>
          <Link to="/createbooking" onClick={() => {
            props.onSetRoom(props.room._id)
          }} className="table__link--available">
            &nbsp;
          </Link>
        </td>
      </tr>
    </tbody>
  </table>

/* TODO Modify the RoomList
  <table className="table">
    <tr className="table__row table__row--header">
      <th scope="colgroup" colSpan="15" className="table__cell--header table__cell--level table__cell--align-left">
        Social Worker 1
      </th>
    </tr>
    <tr className="table__row table__row--subheader">
      <th scope="col" className="table__cell--header table__cell--align-left">
        Room
      </th>
      <th scope="col" className="table__cell--header">
        8am
      </th>
      <th scope="col" className="table__cell--header">
        9am
      </th>
      <th scope="col" className="table__cell--header">
        10am
      </th>
      <th scope="col" className="table__cell--header">
        11am
      </th>
      <th scope="col" className="table__cell--header">
        12pm
      </th>
      <th scope="col" className="table__cell--header">
        1pm
      </th>
      <th scope="col" className="table__cell--header">
        2pm
      </th>
      <th scope="col" className="table__cell--header">
        3pm
      </th>
      <th scope="col" className="table__cell--header">
        4pm
      </th>
      <th scope="col" className="table__cell--header">
        5pm
      </th>
      <th scope="col" className="table__cell--header">
        6pm
      </th>
      <th scope="col" className="table__cell--header">
        7pm
      </th>
      <th scope="col" className="table__cell--header">
        8pm
      </th>
    </tr>
    <tbody className="table__body">
    {props.rooms &&
      roomSorter(props.rooms, '8').map(room => (
        <RoomRow
          key={room._id}
          room={room}
          bookings={room.bookings}
          date={props.date === null ? new Date() : props.date}
          onShowBooking={props.onShowBooking}
          onSetRoom={props.onSetRoom}
        />
      ))}
    </tbody>
  </table>
*/
)

export default RoomsList
