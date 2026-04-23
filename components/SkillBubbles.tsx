import React from 'react'
import { motion } from 'framer-motion';

type Props = {
  directionLeft?: boolean;
};

function SkillBubbles({ directionLeft }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="rounded-full border border-gray-500 object-cover w-20 h-20 md:w-20 md:h-20 xl:w-27 xl:h-27 filter group-hover:grayscale transition duration-300 ease-in-out"
        src="https://cdn.sanity.io/images/xbn4zmfs/production/ff00c08760983e0e037aaf6ab4e004f4d147276a-383x383.png"
        // {/* CHANGE THIS!!!!!!!!*/}
        alt="Skill Icon"
      />
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-20 w-20 md:w-20 md:h-20 xl:w-27 xl:h-27 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold text-black opacity-100">100%</p>
        </div>
      </div>
    </div>
  );
}

export default SkillBubbles;