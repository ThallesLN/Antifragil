import React from "react";

export function Timeline({ items }) {
  return (
    <div className="relative border-l-2 border-amber-400 ml-4">
      {items.map((item, idx) => (
        <div key={idx} className="mb-10 ml-6 flex items-center group">
          <span className="absolute -left-5 flex items-center justify-center w-10 h-10 bg-white border-2 border-amber-400 rounded-full group-hover:bg-amber-100 transition-colors">
            {item.icon}
          </span>
          <div className="bg-gradient-to-br from-slate-50 to-blue-50 border border-slate-200 rounded-2xl p-6 shadow-sm w-full">
            <h3 className="text-lg font-medium text-slate-800">{item.title}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}
