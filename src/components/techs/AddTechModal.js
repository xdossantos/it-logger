import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addTech } from '../../actions/techActions';
import M from 'materialize-css/dist/js/materialize.min.js';

const AddTechModal = ({ addTech }) => {

  const defaultTech = {
    firstName: "",
    lastName:"",
  }

  const [technician, setTechnician] = useState(defaultTech);

  const onSubmit = () => {
    if (technician.firstName === '' || technician.lastName === '') {
      M.toast({ html: 'Please enter the first and last name' });
    } else {

      addTech(technician);

      M.toast({ html: `${technician.firstName} ${technician.lastName} was added as a tech` });

      setTechnician(defaultTech);
    }
  };

  return (
      <div id='add-tech-modal' className='modal'>
        <div className='modal-content'>
          <h4>New Technician</h4>
          <p>
            <input
                type='text'
                name='firstName'
                placeholder='First Name'
                value={technician.firstName}
                onChange={(e) => setTechnician({...technician, firstName: e.target.value})}
            />
          </p>
          <p>
            <input
                type='text'
                name='lastName'
                placeholder='Last Name'
                value={technician.lastName}
                onChange={(e) => setTechnician({...technician, lastName: e.target.value})}
            />
          </p>
        </div>
        <div className='modal-footer'>
          <a
              href='#!'
              onClick={onSubmit}
              className='modal-close waves-effect blue waves-light btn'
          >
            Enter
          </a>
        </div>
      </div>
  );
};

AddTechModal.propTypes = {
  addTech: PropTypes.func.isRequired,
};

export default connect(null, { addTech })(AddTechModal);
