import React, {useState, useEffect} from 'react';
import TechSelectOptions from '../techs/TechSelectOptions';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {updateLog} from '../../actions/logActions';
import useOnSubmit from "../../hooks/use-on-submit";

const EditLogModal = ({current, updateLog}) => {

    const [message, setMessage] = useState('');
    const [attention, setAttention] = useState(false);
    const [tech, setSelectedTech] = useState('');

    useEffect(() => {
        if (current) {
            setMessage(current.message);
            setAttention(current.attention);
            setSelectedTech(current.tech);
        }
    }, [current]);
    const clearUserInputs = () => {
        setMessage('');
        setAttention(false);
        setSelectedTech('');
    }

    const {handleOnSubmit, setFetch} = useOnSubmit({
        onSubmit: () => {
            const updatedLog = {
                id: current.id,
                message,
                tech,
                attention,
                date: new Date(),
            };
            updateLog(updatedLog);
            clearUserInputs();
        }
    })

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
                        <TechSelectOptions onChange={(e) => setSelectedTech(e.target.value)} selected={tech}/>
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
                    onClick={() => handleOnSubmit({
                        message, attention, tech
                    })}
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

export default connect(mapStateToProps, {updateLog})(EditLogModal);

