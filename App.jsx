
import React from 'react';

function DashboardCard({ title, value }) {
  return (
    <div className='card'>
      <h3>{title}</h3>
      <p>{value}</p>
    </div>
  );
}
//Template Code
function App() {
  return (
    <div className='dashboard'>
      <h1>React Dashboard</h1>
      <div className='grid'>
        <DashboardCard title='Users' value='1,024' />
        <DashboardCard title='Sessions' value='2,310' />
        <DashboardCard title='Revenue' value='$5,230' />
      </div>
    </div>
  );
}

export default App;
