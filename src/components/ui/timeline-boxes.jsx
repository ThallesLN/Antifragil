import React from "react";

export function TimelineBoxes({ items }) {
  return (
    <div className="relative flex flex-col items-center">
      {/* Linha vertical central */}
      <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-amber-400 rounded-full -translate-x-1/2 z-0" style={{ minHeight: '100%' }} />
      <div className="w-full grid md:grid-cols-3 gap-8 z-10">
        {items.slice(0, 3).map((item, idx) => (
          <div key={idx} className="relative flex flex-col items-center">
            <span className="flex items-center justify-center w-12 h-12 bg-white border-2 border-amber-400 rounded-full mb-4 z-10">
              {item.icon}
            </span>
            <div className="p-8 rounded-2xl border text-center bg-gradient-to-br from-slate-50 to-blue-50 border-slate-200 shadow-md">
              <h3 className="text-lg font-medium text-slate-800">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full flex justify-center mt-8 gap-8 z-10">
        {items.slice(3).map((item, idx) => (
          <div key={idx+3} className="relative flex flex-col items-center">
            <span className="flex items-center justify-center w-12 h-12 bg-white border-2 border-amber-400 rounded-full mb-4 z-10">
              {item.icon}
            </span>
            <div className="p-8 rounded-2xl border text-center bg-gradient-to-br from-slate-50 to-blue-50 border-slate-200 shadow-md">
              <h3 className="text-lg font-medium text-slate-800">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
