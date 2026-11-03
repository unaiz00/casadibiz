"use client";

import { ChevronDown, Check } from "lucide-react";
import type { BoxMaterialOption } from "@/data/boxes-data";

interface MobileBoxMaterialSelectorProps {
  materials: BoxMaterialOption[];
  activeMaterialId: string;
  isOpen: boolean;
  onToggle: () => void;
  onSelectMaterial: (materialId: string) => void;
}

export default function MobileBoxMaterialSelector({
  materials,
  activeMaterialId,
  isOpen,
  onToggle,
  onSelectMaterial,
}: MobileBoxMaterialSelectorProps) {
  const activeMaterial =
    materials.find((m) => m.id === activeMaterialId) || materials[0];
  const finishCount = materials.length;
  const finishesLabel = `${finishCount} ${finishCount === 1 ? "finish" : "finishes"}`;

  return (
    <div className="w-full">
      {/* Heading with dynamic finishes count / active material */}
      <div className="flex justify-between items-baseline mb-2">
        <span className="text-[11px] font-semibold text-[#0F2744] tracking-[0.2em] uppercase">
          MATERIAL & TEXTURE
        </span>
        <span
          className={`text-[11px] font-semibold ${
            isOpen ? "text-[#C7A86A]" : "text-[#0F2744]"
          }`}
        >
          {isOpen ? activeMaterial?.name : finishesLabel}
        </span>
      </div>

      {/* Compact Collapsed Material Selector Trigger */}
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-label="Toggle material and texture selection"
        className="w-full flex items-center justify-between p-2.5 sm:p-3 rounded-xl border border-[#C7A86A]/40 bg-white hover:border-[#C7A86A] transition-all duration-300 shadow-2xs cursor-pointer text-left"
      >
        <div className="flex items-center gap-3 min-w-0 pr-2">
          {/* Selected material's existing thumbnail */}
          <div className="h-11 w-11 rounded-lg overflow-hidden border border-[#0F2744]/10 bg-[#F6F0E8] shrink-0 relative shadow-2xs">
            {activeMaterial?.image && (
              <img
                src={activeMaterial.image}
                alt={activeMaterial.name}
                className="h-full w-full object-cover"
              />
            )}
          </div>
          <div className="flex flex-col min-w-0">
            <span className="text-xs font-semibold text-[#0F2744] leading-snug truncate">
              {activeMaterial?.name}
            </span>
            <span className="text-[10px] text-[#C7A86A] font-medium tracking-wide">
              Selected material
            </span>
          </div>
        </div>
        <div className="h-8 w-8 rounded-full bg-[#FAF8F5] border border-[#0F2744]/10 flex items-center justify-center shrink-0 text-[#0F2744] transition-colors">
          <ChevronDown
            className={`h-4 w-4 text-[#0F2744]/70 transition-transform duration-300 ${
              isOpen ? "rotate-180 text-[#C7A86A]" : ""
            }`}
          />
        </div>
      </button>

      {/* Expandable two-column grid containing all available materials */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[1600px] opacity-100 mt-2.5" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex justify-between items-baseline mb-2 px-0.5">
          <span className="text-[11px] font-semibold text-[#0F2744] tracking-[0.2em] uppercase">
            Choose Your Material
          </span>
          <span className="text-[10px] text-[#C7A86A] font-semibold uppercase tracking-wider">
            {activeMaterial?.name}
          </span>
        </div>

        <div className="grid grid-cols-2 gap-2.5 sm:gap-3 p-0.5">
          {materials.map((mat) => {
            const isSelected = activeMaterialId === mat.id;
            return (
              <button
                key={mat.id}
                type="button"
                onClick={() => {
                  onSelectMaterial(mat.id);
                }}
                aria-label={`Select ${mat.name} material`}
                className={`group relative p-2 sm:p-2.5 rounded-xl border flex flex-col items-start gap-2 text-left transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? "border-[#C7A86A] border-[1.5px] bg-[#F6F0E8] ring-1 ring-[#C7A86A] shadow-xs"
                    : "border-[#0F2744]/15 bg-white hover:border-[#C7A86A]/60"
                }`}
              >
                {/* Large, clear texture preview */}
                <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden border border-[#0F2744]/10 bg-[#F6F0E8] shrink-0">
                  <img
                    src={mat.image}
                    alt={mat.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  {isSelected && (
                    <div className="absolute top-1.5 right-1.5 h-5 w-5 rounded-full bg-[#C7A86A] text-[#0F2744] flex items-center justify-center shadow-xs">
                      <Check className="h-3 w-3 stroke-[2.5]" />
                    </div>
                  )}
                </div>
                <div className="w-full px-0.5">
                  <span
                    className={`text-xs leading-tight block ${
                      isSelected
                        ? "text-[#0F2744] font-semibold"
                        : "text-[#0F2744]/85 font-medium"
                    }`}
                  >
                    {mat.name}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

