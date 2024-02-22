'use client'
import React, { useState } from 'react';
import AddNewContact from './AddNewContact';
import Contact from './Contact';

const TeamPage = () => {
  const [showAddNew, setShowAddNew] = useState(false);

  const toggleAddNew = () => {
    setShowAddNew(!showAddNew);
  };

  return (
    <>
      {showAddNew ? (
        <AddNewContact onClose={toggleAddNew} />
      ) : (
        <Contact onAddNew={toggleAddNew} /> 
      )}
    </>
  );
};

export default TeamPage;
