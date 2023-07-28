import React, { useState, useEffect } from 'react';
import TechSelectOptions from '../techs/TechSelectOptions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { updateLog } from '../../actions/logActions';
import M from 'materialize-css/dist/js/materialize.min.js';

const EditLogModal = ({ current, updateLog }) => {
  // Component level state
  const [message, setMessage] = useState('');
  const [attention, setAttention] = useState(false);
  const [tech, setSelectedTech] = useState('');

  useEffect(() => {
    if (current) {
      setMessage(current.message);
      setAttention(current.attention);
      setSelectedTech(current.tech);
    }
    //eslint-disable-next-line
  }, [current]);
  const clearUserInputs = () => {
    setMessage('');
    setAttention(false);
    setSelectedTech('');
  }
  const onSubmit = () => {
    if (message === '' || tech === '') {
      M.toast({ html: 'Please enter a message and tech' });
    } else {
      const updatedLog = {
        id: current.id,
        message,
        tech,
        attention,
        date: new Date(),
      };

      updateLog(updatedLog);

      // TEST 4: "Edit Log Modal Select a Technician"
      // 4. Use `updateLog` action provided.

      M.toast({ html: `Log updated by ${tech}` });

      // Clear fields
      clearUserInputs();
      // 5. Clear all input fields after save
    }
  };

  return (
      <div id='edit-log-modal' data-testid='edit-log-modal' className='modal' style={modalStyle}>
        <div className='modal-content'>
          <h4>Edit System Log</h4>
          <div className='row'>
            <div className='input-field'>
              <input
                  aria-label='Log Message'
                  type='text'
                  name='message'
                  value={message}
                  onChange={e => setMessage(e.target.value)}
              />
            </div>
          </div>

          <div className='row'>
            <div className='input-field'>

              <TechSelectOptions onChange={(e) => setSelectedTech(e.target.value)} selected={tech} />

              {/*
              TEST 4: "Edit Log Modal Select a Technician"
              1. Add a select dropdown to select a technician `tech`.
                1.1 Use the `TechSelectOptions` component for your select options.
              2. onChange store the `tech` in state.
              3. onSubmit the log with the selected `tech` must be saved to the db.json "database".
                3.1 Use the `updateLog` action provided to save the log.
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

const modalStyle = {
  width: '75%',
  height: '75%',
};

EditLogModal.propTypes = {
  current: PropTypes.object,
  updateLog: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  current: state.log.current,
});

export default connect(mapStateToProps, { updateLog })(EditLogModal);

