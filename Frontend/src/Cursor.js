import { useEffect, useRef } from "react";
export default function Cursor() {
  const delay = 18;

  const dot = useRef(null);
  const dotOutline = useRef(null);

  const cursorVisible = useRef(true);
  // const cursorEnlarged = useRef(false);

  const endX = useRef(window.innerWidth / 2);
  const endY = useRef(window.innerHeight / 2);
  const _x = useRef(0);
  const _y = useRef(0);

  const requestRef = useRef(null);

  useEffect(() => {
    document.addEventListener("mousemove", mouseMoveEvent);

    animateDotOutline();

    return () => {
      document.removeEventListener("mousemove", mouseMoveEvent);

      cancelAnimationFrame(requestRef.current);
    };
  }, []);

  const mouseMoveEvent = (e) => {
    cursorVisible.current = true;
    // toggleCursorVisibility();

    endX.current = e.clientX;
    endY.current = e.clientY;

    dot.current.style.top = endY.current + "px";
    dot.current.style.left = endX.current + "px";
  };

  const animateDotOutline = () => {
    _x.current += (endX.current - _x.current) / delay;
    _y.current += (endY.current - _y.current) / delay;

    dotOutline.current.style.top = _y.current + "px";
    dotOutline.current.style.left = _x.current + "px";

    requestRef.current = requestAnimationFrame(animateDotOutline);
  };

  return (
    <>
      <div className="custom-cursor"> </div>
      {/* outside */}
      <div ref={dotOutline} className="custom-cursor__cursor"></div>
      {/* inside */}
      <div ref={dot} className="custom-cursor__cursor-two"></div>
    </>
  );
}