import React, { createContext, useContext, useState } from 'react';

const ComparisonContext = createContext({
  comparisonCount: 0,
  setComparisonCount: () => {},
  addToComparisonContext: () => {},
  removeFromComparisonContext: () => {},
});

export const useComparison = () => useContext(ComparisonContext);

export const ComparisonProvider = ({ children }) => {
  const [comparisonCount, setComparisonCount] = useState(0);
  const [comparedUniversities, setComparedUniversities] = useState([]);

  const addToComparisonContext = universityId => {
    if (!comparedUniversities.includes(universityId)) {
      setComparedUniversities([...comparedUniversities, universityId]);
      setComparisonCount(prevCount => prevCount + 1);
    } else {
      console.log('Error');
    }
  };

  const removeFromComparisonContext = universityId => {
    const updatedComparedUniversities = comparedUniversities.filter(
      id => id !== universityId
    );
    setComparedUniversities(updatedComparedUniversities);
    setComparisonCount(prevCount => Math.max(prevCount - 1, 0));
  };

  return (
    <ComparisonContext.Provider
      value={{
        comparisonCount,
        setComparisonCount,
        addToComparisonContext,
        removeFromComparisonContext,
      }}
    >
      {children}
    </ComparisonContext.Provider>
  );
};
