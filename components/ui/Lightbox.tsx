"use client";
import { useEffect } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type LightboxProps = {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string | null;
  alt?: string;
};

export function Lightbox({ isOpen, onClose, imageSrc, alt = "Image preview" }: LightboxProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && imageSrc && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/80 backdrop-blur-sm p-4 md:p-12 cursor-zoom-out"
        >
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 bg-paper text-ink rounded-full border-2 border-ink hover:bg-coral transition-colors"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6" />
          </button>
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-5xl aspect-video md:aspect-auto md:h-[80vh] rounded-2xl overflow-hidden border-4 border-paper cursor-default bg-paper"
          >
            <Image
              src={imageSrc}
              alt={alt}
              fill
              className="object-contain"
              sizes="100vw"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}