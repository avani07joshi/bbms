import React from 'react';
import { Bar } from 'react-chartjs-2';

const dashboard = () => {
  const bloodStockData = {
    labels: ["O+", "A+", "B+", "AB+", "O-", "A-", "B-", "AB-"],
    datasets: [{
      label: 'Blood Stock',
      data: [50, 30, 40, 20, 10, 5, 15, 8],
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1
    }]
  };

  return (
    <main>
      <section>
        <h2>Dashboard</h2>
        <Bar data={bloodStockData} />
      </section>
    </main>
  );
}

export default dashboard;
