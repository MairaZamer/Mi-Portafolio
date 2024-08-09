import React from 'react';

const SocialLinks: React.FC = () => {
  return (
    <div className="flex justify-center space-x-4 mt-4">
      <a href="https://github.com/mairazamer" className="text-teal-500">
      <img src="/github.png" alt="GitHub" className="w-10 h-10" />
      </a>
      <a href="https://www.linkedin.com/in/maira-zamer/" className="text-teal-500">
        <img src="/linkedin.png" alt="LinkedIn" className="w-8 h-8" />
      </a>
      <a href="https://www.instagram.com/mairazamer/" className="text-teal-500">
        <img src="/instagram.png" alt="Instagram" className="w-8 h-8" />
      </a>
    </div>
  );
}

export default SocialLinks;
