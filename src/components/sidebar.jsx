// import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSearch } from "@fortawesome/free-solid-svg-icons";

// function Sidebar() {
//   return (
//     <>
//       <div className="bg-[#1f1f1f] h-full w-full">
//         <div className="flex">
//           <div className="text-white mx-2 mt-4 border rounded-sm p-3">
//             <ul>
//               <li className="font-sans text-md flex items-center text-white ">
//                 <FontAwesomeIcon
//                   icon={faSearch}
//                   className="text-[white] h-4 w-4 mx-2"
//                 />
//                 Profile 
//               </li>
//               <li className="font-sans text-md flex items-center text-white ">
//                 <FontAwesomeIcon
//                   icon={faSearch}
//                   className="text-[white] h-4 w-4 mx-2"
//                 />
//                 Reminder
//               </li>
//               <li className="font-sans text-md flex items-center text-white ">
//                 <FontAwesomeIcon
//                   icon={faSearch}
//                   className="text-[white] h-4 w-4 mx-2"
//                 />
//                 Articles
//               </li>
//               <li className="font-sans text-md flex items-center text-white ">
//                 <FontAwesomeIcon
//                   icon={faSearch}
//                   className="text-[white] h-4 w-4 mx-2"
//                 />
//                 Space Events
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Sidebar;
import { useState } from 'react';
import { GoHome, GoBell, GoCalendar, GoCommentDiscussion, GoStar, GoRocket, GoGlobe, GoBookmark } from 'react-icons/go';

export default function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(false);

  const menuItems = [
    { icon: GoHome, label: 'Profile' },
    { icon: GoBell, label: 'Notifications' },
    { icon: GoCalendar, label: 'Events' },
    { icon: GoCommentDiscussion, label: 'Chat' },
    { icon: GoStar, label: 'Star Map' },
    { icon: GoRocket, label: 'Space Missions' },
    { icon: GoGlobe, label: 'Celestial Images' },
    { icon: GoBookmark, label: 'New Discoveries' },
  ];

  return (
    <div
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
      className={`bg-[#1f1f1f] h-screen p-5 flex flex-col space-y-4 items-${isExpanded ? 'start' : 'center'} transition-width duration-300`}
      style={{ width: isExpanded ? '200px' : '70px' }}
    >
      {menuItems.map((item, index) => {
        const IconComponent = item.icon;
        return (
          <div
            key={index}
            className="flex items-center space-x-2 p-2 rounded-md text-white hover:bg-gray-700 cursor-pointer"
          >
            <IconComponent size={20} />
            {isExpanded && <span className="text-sm">{item.label}</span>}
          </div>
        );
      })}
    </div>
  );
}
