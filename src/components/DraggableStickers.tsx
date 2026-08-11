import { useRef, useState } from "react";

type DraggableStickerProps = {
  src: string;
  alt: string;
  className?: string;
};

export default function DraggableSticker({
  src,
  alt,
  className = "",
}: DraggableStickerProps) {
  const stickerRef = useRef<HTMLDivElement>(null);

  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const [dragging, setDragging] = useState(false);

  const dragStart = useRef({
    mouseX: 0,
    mouseY: 0,
    stickerX: 0,
    stickerY: 0,
  });

  const handlePointerDown = (
    event: React.PointerEvent<HTMLDivElement>
  ) => {
    const sticker = stickerRef.current;
    if (!sticker) return;

    setDragging(true);

    dragStart.current = {
      mouseX: event.clientX,
      mouseY: event.clientY,
      stickerX: position.x,
      stickerY: position.y,
    };

    sticker.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (
    event: React.PointerEvent<HTMLDivElement>
  ) => {
    if (!dragging) return;

    const changeX =
      event.clientX - dragStart.current.mouseX;

    const changeY =
      event.clientY - dragStart.current.mouseY;

    setPosition({
      x: dragStart.current.stickerX + changeX,
      y: dragStart.current.stickerY + changeY,
    });
  };

  const handlePointerUp = (
    event: React.PointerEvent<HTMLDivElement>
  ) => {
    const sticker = stickerRef.current;

    setDragging(false);

    if (sticker?.hasPointerCapture(event.pointerId)) {
      sticker.releasePointerCapture(event.pointerId);
    }
  };

  return (
    <div
      ref={stickerRef}
      className={`draggable-sticker ${
        dragging ? "dragging" : ""
      } ${className}`}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
    >
      <div className="sticker-float">
        <img
          src={src}
          alt={alt}
          draggable="false"
        />
      </div>
    </div>
  );
}