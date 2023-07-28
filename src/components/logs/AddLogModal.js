import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addLog } from '../../actions/logActions';
import TechSelectOptions from '../techs/TechSelectOptions';
import M from 'materialize-css/dist/js/materialize.min.js';

const AddLogModal = ({ addLog }) => {
  const [message, setMessage] = useState('');
  const [attention, setAttention] = useState(false);
  const [tech, setSelectedTech] = useState('');
  const clearUserInputs = () => {
    setMessage('');
    setAttention(false);
    setSelectedTech('');
  }

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

      addLog(newLog);

      M.toast({ html: `Log added by ${tech}` });

      clearUserInputs();
    }
  };


  return (
      <div id='add-log-modal' data-testid="add-log-modal" className='modal' style={modalStyle}>
        <div className='modal-content'>
          <h4>Enter System Log</h4>
          <div className='row'>
            <div className='input-field'>
              <input
                  type='text'
                  aria-label='Log Message'
                  data-testid='add-log-message'
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
              <TechSelectOptions onChange={(e) => setSelectedTech(e.target.value)} selected={tech} />
            </div>
          </div>


          <div className='row'>
            <div className='input-field'>
              <p>
                <label>
                  <input
                      data-testid='add-log-check'
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
              data-testid='add-log-button'
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
