import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getTechs } from '../../actions/techActions';
import Preloader from '../layout/Preloader';

const TechSelectOptions = ({tech: {techs, loading}, getTechs, onChange, selected}) => {

  useEffect(() => {
    getTechs();
  }, []);

  if (loading || techs === null) {
    return <Preloader />;
  }

  const techniciansIsFetched = (!loading && techs.length > 0);

  return(
      <select aria-label='Select technician' name='technician' className='browser-default' onChange={onChange} value={selected} >
        <option aria-label='' value={""} disabled>Select Technician</option>
        { techniciansIsFetched && techs.map(tech =>
            <option
                key={tech.id}
                aria-label={`Select ${tech.firstName} ${tech.lastName}`}
                value={`${tech.firstName} ${tech.lastName}`}>
              {`${tech.firstName} ${tech.lastName}`}
            </option>
        )}
      </select>
  )
};

TechSelectOptions.propTypes = {
  tech: PropTypes.object.isRequired,
  getTechs: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  selected: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  tech: state.tech,
});

export default connect(mapStateToProps, { getTechs })(TechSelectOptions);
