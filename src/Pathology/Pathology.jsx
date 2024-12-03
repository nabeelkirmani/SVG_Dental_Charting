// src/components/Pathology/Pathology.jsx
import React, { useContext } from 'react';
import './ActionButtons.scss';
import { SelectionContext } from '../contexts/SelectionContext';
import PathologyTypes from './PathologyTypes.jsx';
import PathologyDetails from './PathologyDetails.jsx';
import ActionButtons from './ActionButtons.jsx';

function Pathology() {
  return (
    <div className="pathology-view">
      <h2 className="heading">Pathology</h2>
      <PathologyTypes />
      <PathologyDetails />
      <ActionButtons />
    </div>
  );
}

export default Pathology;