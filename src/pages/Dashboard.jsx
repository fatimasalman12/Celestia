import React from "react";
import Sidebar from "../components/sidebar";
import Topsection from "../components/topsection";

function Dashboard() {
  return (
    <>
      <Topsection/>
      <Sidebar />
    </>
  );
}

export default Dashboard;



// The code below has some charts and stuff u can use those later if needed 


// import React from "react";
// import { Line } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
// } from 'chart.js';

// // Register chart components
// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend
// );

// const Dashboard = () => {
//   // Example data for Chart.js (you can customize it further)
//   const dataReceived = {
//     labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
//     datasets: [
//       {
//         label: "Overall money received",
//         data: [65, 59, 80, 81, 56, 55, 40],
//         fill: false,
//         borderColor: "#00FF88",
//         backgroundColor: "#00FF88",
//       },
//     ],
//   };

//   const dataSpent = {
//     labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
//     datasets: [
//       {
//         label: "Overall money spent",
//         data: [35, 49, 60, 71, 46, 45, 30],
//         fill: false,
//         borderColor: "#FFA500",
//         backgroundColor: "#FFA500",
//       },
//     ],
//   };

//   return (
//     <div className="dark:bg-gray-900 min-h-screen text-gray-300">
//       {/* Sidebar */}
//       <div className="flex">
//         <aside className="w-64 bg-gray-800 p-4">
//           <h1 className="text-xl font-bold text-white mb-4">Flup</h1>
//           <nav className="space-y-4">
//             <a href="#dashboard" className="block py-2 hover:bg-gray-700 rounded">Dashboard</a>
//             <a href="#marketing" className="block py-2 hover:bg-gray-700 rounded">Marketing</a>
//             <a href="#payments" className="block py-2 hover:bg-gray-700 rounded">Payments</a>
//             <a href="#settings" className="block py-2 hover:bg-gray-700 rounded">Settings</a>
//           </nav>
//         </aside>

//         {/* Main Content */}
//         <div className="flex-1 p-6">
//           <header className="flex justify-between items-center mb-6">
//             <h2 className="text-2xl font-semibold">Dashboard</h2>
//             <button className="bg-gray-700 px-4 py-2 rounded-md text-sm">Export</button>
//           </header>

//           {/* Stats Cards */}
//           <div className="grid grid-cols-4 gap-4 mb-6">
//             <div className="bg-gray-800 p-4 rounded-md">
//               <h3 className="text-lg font-medium">Total transactions</h3>
//               <p className="text-2xl font-bold">$185,458</p>
//             </div>
//             <div className="bg-gray-800 p-4 rounded-md">
//               <h3 className="text-lg font-medium">Total money received</h3>
//               <p className="text-2xl font-bold">$1,654 M</p>
//             </div>
//             <div className="bg-gray-800 p-4 rounded-md">
//               <h3 className="text-lg font-medium">Total money spent</h3>
//               <p className="text-2xl font-bold">-$897 M</p>
//             </div>
//             <div className="bg-gray-800 p-4 rounded-md">
//               <h3 className="text-lg font-medium">Net profit</h3>
//               <p className="text-2xl font-bold">$757 M</p>
//             </div>
//           </div>

//           {/* Charts */}
//           <div className="grid grid-cols-2 gap-4 mb-6">
//             <div className="bg-gray-800 p-4 rounded-md">
//               <h3 className="text-lg font-medium mb-4">Overall money received</h3>
//               <Line data={dataReceived} />
//             </div>
//             <div className="bg-gray-800 p-4 rounded-md">
//               <h3 className="text-lg font-medium mb-4">Overall money spent</h3>
//               <Line data={dataSpent} />
//             </div>
//           </div>

//           {/* Search, Filter, and Transaction Table */}
//           <div className="bg-gray-800 p-4 rounded-md">
//             <div className="flex justify-between items-center mb-4">
//               <input
//                 type="text"
//                 placeholder="Search for transaction"
//                 className="bg-gray-700 px-4 py-2 rounded-md w-full"
//               />
//               <button className="ml-4 bg-gray-700 px-4 py-2 rounded-md">Recent transactions</button>
//             </div>
//             <table className="table-auto w-full text-left">
//               <thead>
//                 <tr>
//                   <th className="px-4 py-2">Transaction</th>
//                   <th className="px-4 py-2">Date</th>
//                   <th className="px-4 py-2">Amount</th>
//                   <th className="px-4 py-2">Category</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr>
//                   <td className="px-4 py-2">Payment - #15201</td>
//                   <td className="px-4 py-2">Feb 16, 2022</td>
//                   <td className="px-4 py-2">$120.00</td>
//                   <td className="px-4 py-2">Order payment</td>
//                 </tr>
//                 <tr>
//                   <td className="px-4 py-2">Payment - #15202</td>
//                   <td className="px-4 py-2">Feb 17, 2022</td>
//                   <td className="px-4 py-2">$98.00</td>
//                   <td className="px-4 py-2">Salary payment</td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
