'use client'
import React, { useState } from 'react';
import AddNew from './AddNew';
import Team from './page';

const TeamPage = () => {
  const [showAddNew, setShowAddNew] = useState(false);

  const toggleAddNew = () => {
    setShowAddNew(!showAddNew);
  };

  return (
    <>
      {showAddNew ? (
        <AddNew onClose={toggleAddNew} />
      ) : (
        <Team onAddNew={toggleAddNew} /> 
      )}
    </>
  );
};

export default TeamPage;
