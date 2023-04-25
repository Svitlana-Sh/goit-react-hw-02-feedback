import React from 'react';
import PropTypes from 'prop-types';
import { SectionTitleStyled } from './feedback-staled'

export const Section = ({ title, moreStyles, children }) => {
  return (
    <div moreStyles={moreStyles}>
      <SectionTitleStyled>{title}</SectionTitleStyled>
      {children}
    </div>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  moreStyles: PropTypes.string,
};