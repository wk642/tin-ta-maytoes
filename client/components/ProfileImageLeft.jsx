import React, { useState, useEffect } from "react";

export default function ProfileImageLeft() {
  const [botttsAvatarUrl, setBotttsAvatarUrl] = useState('');
  const [seed, setSeed] = useState('sara'); 

  useEffect(() => {
    const fetchBotttsAvatar = async () => {
      const style = 'bottts';
      const apiUrl = `https://api.dicebear.com/7.x/${style}/svg?seed=${seed}`;
      setBotttsAvatarUrl(apiUrl);
    };

    fetchBotttsAvatar();
  }, [seed]);

  return (
    <div className="profile-image-div justify-items-stret ml-25 relative w-fit h-fit group">
      <div
        className="w-10 h-10 bg-contain bg-no-repeat relative"
        style={{ backgroundImage: `url('${botttsAvatarUrl}')` }}
      />
    </div>
  );
}