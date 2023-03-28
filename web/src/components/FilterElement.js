import React from 'react'
import Button from './Button'
import moment from 'moment'
import { formatTime, startTimeSelectOptions, endTimeSelectOptions } from '../helpers/bookingForm'

function FilterElement({
  onSetFloorParam,
  onToggleFeature,
  onToggleCapacity,
  onSetAvailabilityParam,
  floorParam,
  filterParams,
  capacityParams,
  availabilityParam,
  date
}) {

  return (
    <div className="sidebar__box--filter filter">
      <h3 className="header__heading header__heading--sidebar">Filter</h3>
      <form className="form form--filter">

        <h4 className="form__heading form__heading--filter">Category</h4>
        <div onChange={(event) => onToggleFeature(event.target.name)} >
          <div className="form__group">
            <input type="checkbox" id="macLab" name="macLab" className="form__input--checkbox" checked={filterParams[0].value} />
            <label for="macLab" className="form__label form__label--inline">Home</label>
          </div>
          <div className="form_group">
            <input type="checkbox" id="pcLab" name="pcLab" className="form__input--checkbox" checked={filterParams[1].value} />
            <label for="pcLab" className="form__label form__label--inline">Teenagers</label>
          </div>
          <div className="form_group">
            <input type="checkbox" id="tv" name="tv" className="form__input--checkbox" checked={filterParams[2].value} />
            <label for="tv" className="form__label form__label--inline">School</label>
          </div>
          <div className="form_group">
            <input type="checkbox" id="opWalls" name="opWalls" className="form__input--checkbox" checked={filterParams[3].value} />
            <label for="opWall" className="form__label form__label--inline">Gang Violence</label>
          </div>
          <div className="form_group">
            <input type="checkbox" id="projector" name="projector" className="form__input--checkbox" checked={filterParams[4].value} />
            <label for="projector" className="form__label form__label--inline">Sick</label>
          </div>
        </div>
        <h4 className="form__heading form__heading--filter">Availability</h4>
          <div onChange={(event) => onSetAvailabilityParam(event.target.value)} >
            <div className="form_group">
              <input type="radio" id="fullyAvailable" value="fullyAvail" name="availability" className="form__input--radio" checked={availabilityParam === 'fullyAvail' ? true : false} />
              <label for="fullyAvailable" className="form__label form__label--inline">Available</label>
            </div>
            <div className="form_group">
              <input type="radio" id="partialAvailable" value="partAvail" name="availability" className="form__input--radio" checked={availabilityParam === 'partAvail' ? true : false} />
              <label for="partialAvailable" className="form__label form__label--inline">On Processing</label>
            </div>
            <div className="form_group">
              <input type="radio" id="fullyBooked" value="fullBooked" name="availability" className="form__input--radio" checked={availabilityParam === 'fullBooked' ? true : false} />
              <label for="fullyBooked" className="form__label form__label--inline">Finished</label>
            </div>
          </div>
      </form>
    </div>
  )
}

export default FilterElement