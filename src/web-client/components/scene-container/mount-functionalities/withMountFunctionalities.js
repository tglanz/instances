import React from 'react';

const mountFunctionalitiesExection = mountFunctionalities => mountInfo => mountFunctionalities.forEach(fn => fn(mountInfo));

export default (...mountFunctionalities) => SceneContainer => 
    props => <SceneContainer {...props} onMounted={ mountFunctionalitiesExection(mountFunctionalities) } />