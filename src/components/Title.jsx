import React from "react";
import PropTypes from 'prop-types';

const Title = ({ title }) => {
    return (
      <>
        {/* Divider: With Heading */}
        <h3 className="flex items-center mt-6">
          <span
            aria-hidden="true"
            className="h-0.5 grow rounded bg-gray-200"
          />
          <span className="mx-3 text-2xl text-green-600 font-medium">{title}</span>
          <span
            aria-hidden="true"
            className="h-0.5 grow rounded bg-gray-200"
          />
        </h3>
        {/* END Divider: With Heading */}
      </>
    );
  }

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;
