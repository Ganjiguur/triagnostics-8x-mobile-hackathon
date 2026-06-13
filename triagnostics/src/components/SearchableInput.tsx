import { useState, useRef, useEffect } from "react";
import { Search, X } from "lucide-react";

interface SearchableInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  suggestions: string[];
}

export function SearchableInput({
  value,
  onChange,
  placeholder = "Type to search...",
  suggestions,
}: SearchableInputProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [filtered, setFiltered] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (value.length > 0) {
      const lowerValue = value.toLowerCase();
      setFiltered(
        suggestions.filter((item) => item.toLowerCase().includes(lowerValue)).slice(0, 8)
      );
      setIsOpen(true);
    } else {
      setFiltered([]);
      setIsOpen(false);
    }
  }, [value, suggestions]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (item: string) => {
    onChange(item);
    setIsOpen(false);
  };

  const handleClear = () => {
    onChange("");
    inputRef.current?.focus();
  };

  return (
    <div ref={containerRef} className="relative">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
        <input
          ref={inputRef}
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => value.length > 0 && setIsOpen(true)}
          placeholder={placeholder}
          className="w-full pl-10 pr-10 py-4 rounded-2xl border border-gray-200 text-gray-900 outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-100 transition-all"
        />
        {value && (
          <button
            onClick={handleClear}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X size={18} />
          </button>
        )}
      </div>

      {isOpen && filtered.length > 0 && (
        <div className="absolute top-full mt-2 left-0 right-0 z-50 bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden">
          <div className="max-h-64 overflow-y-auto">
            {filtered.map((item, index) => (
              <button
                key={index}
                onClick={() => handleSelect(item)}
                className="w-full px-4 py-3 text-left text-gray-900 hover:bg-teal-50 transition-colors border-b border-gray-100 last:border-b-0 flex items-center gap-2"
              >
                <Search size={16} className="text-gray-400" />
                <span className="font-medium">{item}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {isOpen && value.length > 0 && filtered.length === 0 && (
        <div className="absolute top-full mt-2 left-0 right-0 z-50 bg-white rounded-2xl border border-gray-200 shadow-lg p-4 text-center text-gray-500">
          No matches found
        </div>
      )}
    </div>
  );
}
