import React from "react";

export function AlternatingTimeline({ items }) {
  return (
    <div className="relative flex flex-col items-center">
      {/* Linha vertical central removida para desktop */}
      <div className="flex flex-col gap-12 w-full z-10">
        {items.map((item, idx) => (
          <div
            key={idx}
            className={`relative flex flex-col md:flex-row items-center md:items-stretch w-full ${idx % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}
          >
            {/* Espaço para alinhar à esquerda/direita */}
            {idx % 2 === 0 ? (
              <>
                <div className="md:w-1/2 flex justify-end pr-8">
                  <div className="relative flex flex-col items-end">
                    <span className="flex items-center justify-center w-16 h-16 bg-white border-2 border-amber-400 rounded-full mb-4 z-10">
                      {item.icon}
                    </span>
                    <div className="p-8 rounded-2xl border text-right bg-gradient-to-br from-slate-50 to-blue-50 border-slate-200 shadow-md max-w-md">
                      <h3 className="text-lg font-medium text-slate-800">{item.title}</h3>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2"></div>
              </>
            ) : (
              <>
                <div className="md:w-1/2"></div>
                <div className="md:w-1/2 flex justify-start pl-8">
                  <div className="relative flex flex-col items-start">
                    <span className="flex items-center justify-center w-16 h-16 bg-white border-2 border-amber-400 rounded-full mb-4 z-10">
                      {item.icon}
                    </span>
                    <div className="p-8 rounded-2xl border text-left bg-gradient-to-br from-slate-50 to-blue-50 border-slate-200 shadow-md max-w-md">
                      <h3 className="text-lg font-medium text-slate-800">{item.title}</h3>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
