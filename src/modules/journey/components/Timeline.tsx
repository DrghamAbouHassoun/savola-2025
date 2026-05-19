import { useState, useEffect, useRef, useCallback } from "react";

type StructuredItem = { title: string; desc: string };
type TimelineItem = string | StructuredItem;

const isStructured = (item: TimelineItem): item is StructuredItem =>
  typeof item === "object" && item !== null;

const DOT_LABEL_POSITIONS = [
  { x: 14,  y: 258, anchor: "start" as const },
  { x: 249, y: -12, anchor: "middle" as const },
  { x: 489, y: -12, anchor: "middle" as const },
  { x: 721, y: 258, anchor: "end" as const },
];

const Timeline = ({ list }: { list: TimelineItem[] }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [animKey, setAnimKey] = useState<number>(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const structured = list.length > 0 && isStructured(list[0]);

  const stopInterval = useCallback(() => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  const activate = useCallback(
    (index: number, stopAuto = false) => {
      if (stopAuto) stopInterval();
      setActiveIndex(index);
      setAnimKey((k) => k + 1);
    },
    [stopInterval]
  );

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => {
        const next = (prev + 1) % list.length;
        setAnimKey((k) => k + 1);
        return next;
      });
    }, 5000);
    return () => stopInterval();
  }, [list.length, stopInterval]);

  const dotProps = (index: number) => ({
    className: "cursor-pointer",
    onClick: () => activate(index, true),
    onMouseEnter: () => activate(index, true),
  });

  const getContent = (item: TimelineItem) =>
    isStructured(item) ? item.desc : item;

  const getTitle = (item: TimelineItem) =>
    isStructured(item) ? item.title : null;

  return (
    <div className="relative">
      <style>{`
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(14px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0)   scale(1);    }
        }
        .timeline-enter {
          animation: fadeSlideIn 0.45s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
      `}</style>

      <svg
        width="733"
        viewBox={structured ? "0 -30 735 300" : "0 0 735 241"}
        fill="none"
        className="w-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Active highlight circles */}
        {activeIndex === 0 && <circle cx="14" cy="227" r="14" fill="#FAA831" />}
        {activeIndex === 1 && (
          <circle cx="14" cy="227" r="14" transform="translate(235, -208)" fill="#FAA831" />
        )}
        {activeIndex === 2 && (
          <circle cx="14" cy="227" r="14" transform="translate(475, -208)" fill="#FAA831" />
        )}
        {activeIndex === 3 && (
          <circle cx="14" cy="227" r="14" transform="translate(707, -8)" fill="#FAA831" />
        )}

        {/* Arc path */}
        <path
          d="M369.998 0C527.576 0 663.429 93.0069 725.662 227.119H722.353C660.332 94.7118 525.875 3 369.998 3C214.121 3.00018 79.6654 94.712 17.6445 227.119H14.335C76.5675 93.007 212.421 0.000180221 369.998 0Z"
          fill="#FAA831"
        />

        {/* Interactive dots */}
        <circle cx="14"  cy="227" r="10" fill="#A4CE4E" {...dotProps(0)} />
        <circle cx="249" cy="19"  r="10" fill="#A4CE4E" {...dotProps(1)} />
        <circle cx="489" cy="19"  r="10" fill="#A4CE4E" {...dotProps(2)} />
        <circle cx="721" cy="219" r="10" fill="#A4CE4E" {...dotProps(3)} />

        {/* Title labels for structured items */}
        {structured &&
          list.map((item, i) => {
            const pos = DOT_LABEL_POSITIONS[i];
            const active = i === activeIndex;
            return (
              <text
                key={i}
                x={pos.x}
                y={pos.y}
                textAnchor={pos.anchor}
                fill={active ? "#FAA831" : "#9CA3AF"}
                fontSize="13"
                fontWeight={active ? "700" : "500"}
                fontFamily="inherit"
                {...dotProps(i)}
              >
                {getTitle(item)}
              </text>
            );
          })}
      </svg>

      {/* Content box */}
      <div className="relative flex justify-center items-start -translate-y-20 max-w-[70%] mx-auto">
        {/* Ghost layer to hold max height */}
        <div className="invisible w-full" aria-hidden="true">
          {list.map((item, i) => (
            <div
              key={i}
              className={`bg-linear-to-b from-savola-green-20 to-savola-green-20/0 p-4 text-savola-cool-grey text-sm leading-relaxed${
                i === 0 ? "" : " absolute top-0 left-0 right-0"
              }`}
            >
              {structured && (
                <p className="font-extrabold text-base mb-1">{getTitle(item)}</p>
              )}
              {getContent(item)}
            </div>
          ))}
        </div>

        {/* Active item */}
        <div className="absolute inset-0 flex items-center justify-center">
          {list.map((item, i) =>
            i === activeIndex ? (
              <div
                key={animKey}
                className="timeline-enter w-full bg-linear-to-b from-savola-green-20 to-savola-green-20/0 p-4 text-savola-cool-grey text-sm leading-relaxed"
              >
                {structured && (
                  <p className="font-extrabold text-base mb-1">{getTitle(item)}</p>
                )}
                {getContent(item)}
              </div>
            ) : null
          )}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
