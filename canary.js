import React from 'react';
import { motion } from 'framer-motion'; // For animations
import { IconHome } from '@tabler/icons-react'; // Replace 'IconHome' with the specific icon you want to use
import clsx from 'clsx'; // For conditional classNames
import { merge } from 'tailwind-merge'; // To merge Tailwind classes

const MyComponent = () => {
  // Example state for animation
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <motion.div
      className={merge('p-4 bg-gray-200 rounded', isHovered ? 'shadow-lg' : 'shadow')}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-lg font-bold">My Animated Component</h2>
      <div className="flex items-center">
        <IconHome className="mr-2" /> {/* Replace 'IconHome' with actual icon name */}
        <p className={clsx('text-gray-700', isHovered && 'text-blue-500')}>
          This is an animated component with Tailwind CSS!
        </p>
      </div>
    </motion.div>
  );
};

export default MyComponent;
