import React from "react";
import "./ProjectsModal.css";
import { motion, AnimatePresence } from "framer-motion";

export default function ProjectsModal({ open, close }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
          transition={{ ease: "easeOut", duration: 0.2 }}
          className="modal"
          onClick={close}
        >
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta
              eius ducimus velit inventore. Id vel cupiditate, similique
              asperiores eius accusantium aspernatur suscipit eum quos tenetur
              nesciunt labore numquam iure perferendis. Eveniet voluptas
              doloribus, eos necessitatibus itaque asperiores earum, soluta
              autem neque esse recusandae accusamus corrupti. A rerum harum enim
              iusto quidem laudantium asperiores iure magni doloribus!
              Voluptates non nobis eius. Dignissimos quibusdam eum tenetur unde
              porro alias tempora praesentium dicta possimus eius enim sint
              aperiam perspiciatis, consequuntur soluta quas, nihil
              reprehenderit dolor nostrum dolore non nulla, assumenda
              repellendus! Repellat, reiciendis. Reiciendis dolorem dolor
              voluptatibus, fugit omnis cupiditate illo recusandae quibusdam
              voluptatum ad beatae ullam sunt quisquam nulla eligendi sapiente
              voluptate saepe deleniti at est? Qui, unde voluptatem! Fuga, ab
              numquam! Voluptatem, unde itaque molestiae eveniet excepturi aut
              consectetur sapiente laudantium harum aliquam? Quam libero illo
              porro blanditiis fugit nesciunt incidunt reprehenderit cum aperiam
              asperiores quas, sit suscipit molestiae. Aliquam, a.
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
