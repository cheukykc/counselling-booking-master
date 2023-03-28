import React from 'react'

const Key = props => (
  <div className="sidebar__box--key key">
    <h3 className="header__heading header__heading--sidebar">Key</h3>
    <div className="key__group">
      <span className="key__square key__square--bu1"></span>
      <p className="key__description">Important</p>
    </div>
    <br/>
    <div className="key__group">
      <span className="key__square key__square--bu2"></span>
      <p className="key__description">Normal</p>
    </div>
    <br/>
    <div className="key__group">
      <span className="key__square key__square--bu3"></span>
      <p className="key__description">Regular</p>
    </div>
  </div>
)

export default Key