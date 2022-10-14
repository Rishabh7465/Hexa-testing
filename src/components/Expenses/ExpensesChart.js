import React from "react";

import Chart from "../Chart/Chart";

const ExpensesChart = (props) => {
  const chartDataPoints = [
    { label: "Jan", value: 0 },
    { label: "feb", value: 0 },
    { label: "mar", value: 0 },
    { label: "apr", value: 0 },
    { label: "may", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "aug", value: 0 },
    { label: "sep", value: 0 },
    { label: "oct", value: 0 },
    { label: "nov", value: 0 },
    { label: "dec", value: 0 },
  ];

  for (const expense of props.expenses) {
    const expenseMonth = expense.date.getMonth();
    chartDataPoints[expenseMonth].value += expense.amount;
  }

  return <Chart dataPoints={chartDataPoints} />;
};

export default ExpensesChart;
// import React from 'react';

// import Chart from '../Chart/Chart';

// const ExpensesChart = (props) => {
//   const chartDataPoints = [
//     { label: 'Jan', value: 0 },
//     { label: 'Feb', value: 0 },
//     { label: 'Mar', value: 0 },
//     { label: 'Apr', value: 0 },
//     { label: 'May', value: 0 },
//     { label: 'Jun', value: 0 },
//     { label: 'Jul', value: 0 },
//     { label: 'Aug', value: 0 },
//     { label: 'Sep', value: 0 },
//     { label: 'Oct', value: 0 },
//     { label: 'Nov', value: 0 },
//     { label: 'Dec', value: 0 },
//   ];

//   for (const expense of props.expense) {
//     const expenseMonth = expense.date.getMonth(); // starting at 0 => January => 0
//     chartDataPoints[expenseMonth].value += expense.amount;
//   }

//   return <Chart dataPoints={chartDataPoints} />;
// };

// export default ExpensesChart;