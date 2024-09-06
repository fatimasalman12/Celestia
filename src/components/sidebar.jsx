import { useState } from 'react';
import { GoHome, GoBell, GoCalendar, GoCommentDiscussion, GoStar, GoRocket, GoGlobe, GoBookmark } from 'react-icons/go';
import StarMap from './starmap';

// Dummy components to represent different sections
const Profile = () => <div>Profile Component</div>;
const Notifications = () => <div>Notifications Component</div>;
const Events = () => <div>Events Component</div>;
const Chat = () => <div>Chat Component</div>;
// const StarMap = () => <div>Star Map Component</div>;
const SpaceMissions = () => <div>Space Missions Component</div>;
const CelestialImages = () => <div>Celestial Images Component</div>;
const NewDiscoveries = () => <div>New Discoveries Component</div>;

export default function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedItem, setSelectedItem] = useState('Profile'); // State to keep track of the selected item

  const menuItems = [
    { icon: GoHome, label: 'Profile', component: <Profile /> },
    { icon: GoBell, label: 'Notifications', component: <Notifications /> },
    { icon: GoCalendar, label: 'Events', component: <Events /> },
    { icon: GoCommentDiscussion, label: 'Chat', component: <Chat /> },
    { icon: GoStar, label: 'Star Map', component: <StarMap /> },
    { icon: GoRocket, label: 'Space Missions', component: <SpaceMissions /> },
    { icon: GoGlobe, label: 'Celestial Images', component: <CelestialImages /> },
    { icon: GoBookmark, label: 'New Discoveries', component: <NewDiscoveries /> },
  ];

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
        className={`bg-[#1f1f1f] h-screen p-5 flex flex-col space-y-4 items-${
          isExpanded ? 'start' : 'center'
        } transition-width duration-300`}
        style={{ width: isExpanded ? '200px' : '70px' }}
      >
        {menuItems.map((item, index) => {
          const IconComponent = item.icon;
          const isSelected = selectedItem === item.label;

          return (
            <div
              key={index}
              onClick={() => setSelectedItem(item.label)}
              className={`flex items-center space-x-2 p-2 rounded-md text-white cursor-pointer ${
                isSelected ? 'bg-[#3c3c3c]' : 'hover:bg-[#3c3c3c]'
              }`}
            >
              <IconComponent size={20} />
              {isExpanded && <span className="text-sm">{item.label}</span>}
            </div>
          );
        })}
      </div>

      {/* Main content area */}
      <div className="flex-1">
        {menuItems.find((item) => item.label === selectedItem)?.component}
      </div>
    </div>
  );
}
