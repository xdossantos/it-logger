import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addLog } from '../../actions/logActions';
import TechSelectOptions from '../techs/TechSelectOptions';
import M from 'materialize-css/dist/js/materialize.min.js';

const AddLogModal = ({ addLog }) => {
  const [message, setMessage] = useState('');
  const [attention, setAttention] = useState(false);
  const tech = '';

  const onSubmit = () => {
    if (message === '' || tech === '') {
      M.toast({ html: 'Please enter a message and select a technician' });
    } else {
      const newLog = {
        message,
        attention,
        tech,
        date: new Date(),
      };

      // TEST 3: "Add Log Modal Select a Technician"
      // 4. use the `addLog` action provided. 

      M.toast({ html: `Log added by ${tech}` });

      // Clear fields
      // 5. Clear all input fields after save.
    }
  };

  return (
    <div id='add-log-modal' className='modal' style={modalStyle}>
      <div className='modal-content'>
        <h4>Enter System Log</h4>
        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='message'
              value={message}
              onChange={e => setMessage(e.target.value)}
            />
            <label htmlFor='message' className='active'>
              Log Message
            </label>
          </div>
        </div>

        <div className='row'>
          <div className='input-field'>

            <p>!! Add technician select dropdown here. Reference the screenshots in the README. Remove this text. !!</p>
            
              {/* 
              TEST 3: "Add Log Modal Select a Technician"
              1. Add a select dropdown to select a technician `tech`.
                1.1 Use the `TechSelectOptions` component for your select options.
              2. onChange store the `tech` in state.
              3. onSubmit the log with the selected `tech` must be saved to the db.json "database".
                3.1 Use the `addLog` action provided to save the log.
              */}
                
          </div>
        </div>
        

        <div className='row'>
          <div className='input-field'>
            <p>
              <label>
                <input
                  type='checkbox'
                  className='filled-in'
                  checked={attention}
                  value={attention}
                  onChange={e => setAttention(!attention)}
                />
                <span>Needs Attention</span>
              </label>
            </p>
          </div>
        </div>
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

AddLogModal.propTypes = {
  addLog: PropTypes.func.isRequired,
};

const modalStyle = {
  width: '75%',
  height: '75%',
};

export default connect(null, { addLog })(AddLogModal);
