"use client";

import Image from "next/image";

// avatar image
import avatar from "/public/anwar.png";

const Avatar = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none">
      <Image
        src={avatar}
        alt="avatar"
        width={737}
        height={678}
        className="translate-z-0 w-full h-full"
      />
    </div>
  );
};

export default Avatar;
