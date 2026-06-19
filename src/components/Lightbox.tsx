import { useEffect } from "react";
import { X } from "lucide-react";

export function Lightbox({
  src,
  title,
  onClose,
}: {
  src: string | null;
  title?: string;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!src) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [src, onClose]);

  if (!src) return null;
  return (
    <div
      role="dialog"
      aria-modal="true"
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md p-4 sm:p-8"
    >
      <button
        onClick={onClose}
        aria-label="Close"
        className="absolute top-4 right-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition"
      >
        <X className="h-5 w-5" />
      </button>
      <figure
        onClick={(e) => e.stopPropagation()}
        className="flex max-h-full max-w-full flex-col items-center gap-3"
      >
        <img
          src={src}
          alt={title ?? "Certificate"}
          className="max-h-[85vh] max-w-[92vw] rounded-lg object-contain shadow-2xl"
        />
        {title && (
          <figcaption className="text-sm text-white/80">{title}</figcaption>
        )}
      </figure>
    </div>
  );
}
