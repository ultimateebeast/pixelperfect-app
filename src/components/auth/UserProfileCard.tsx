"use client";

import { useUser } from "@clerk/nextjs";
import { useState } from "react";
import {
  useFloating,
  useClick,
  useDismiss,
  useInteractions,
  offset,
  shift,
  flip,
  autoUpdate,
} from "@floating-ui/react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function UserProfileCard() {
  const { user, isLoaded } = useUser();
  const [open, setOpen] = useState(false);

  const { refs, floatingStyles, context } = useFloating({
    open,
    onOpenChange: setOpen,
    placement: "bottom-start",
    middleware: [offset(8), shift(), flip()],
    whileElementsMounted: autoUpdate,
  });

  const click = useClick(context);
  const dismiss = useDismiss(context);
  const { getReferenceProps, getFloatingProps } = useInteractions([
    click,
    dismiss,
  ]);

  if (!isLoaded || !user) return null;

  return (
    <div className="relative z-50 bottom-4 left-4">
      <button
        ref={refs.setReference}
        {...getReferenceProps()}
        type="button"
        className="text-sm px-3 py-2 rounded-md bg-white dark:bg-neutral-800 hover:bg-gray-200 dark:hover:bg-neutral-700 transition-colors">
        👤
      </button>

      {open && (
        <motion.div
          ref={refs.setFloating}
          {...getFloatingProps()}
          style={floatingStyles}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="backdrop-blur-md bg-white/80 dark:bg-neutral-900/80 rounded-xl shadow-xl border dark:border-neutral-700 p-4 w-64">
          <div className="flex flex-col items-center">
            <Image
              src={user.imageUrl}
              alt="Profile"
              width={70}
              height={70}
              className="rounded-full border-2 border-gray-200 dark:border-neutral-700"
            />
            <h3 className="mt-2 text-lg font-semibold text-gray-800 dark:text-white">
              {user.fullName}
            </h3>
            <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
              {user.emailAddresses[0]?.emailAddress}
            </p>
          </div>
        </motion.div>
      )}
    </div>
  );
}
