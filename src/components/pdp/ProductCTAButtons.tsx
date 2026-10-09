import Link from "next/link";
import { FileText } from "lucide-react";

export function WhatsAppGlyph({ className = "w-5 h-5 sm:w-[22px] sm:h-[22px]" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.978-.275-.101-.475-.15-.676.15-.2.3-.776.978-.951 1.178-.175.2-.351.225-.651.075-.301-.15-1.27-.468-2.42-1.493-.895-.798-1.5-1.783-1.675-2.083-.175-.3-.019-.462.132-.612.136-.135.301-.35.451-.525.15-.175.2-.3.301-.5.1-.2.05-.375-.025-.525-.075-.15-.676-1.63-1.002-2.233-.243-.45-.49-.441-.676-.45-.175-.008-.375-.01-.576-.01-.2 0-.526.075-.802.375-.275.3-1.052 1.028-1.052 2.508s1.077 2.908 1.228 3.109c.15.2 2.119 3.236 5.133 4.539.717.31 1.277.495 1.714.634.72.229 1.375.197 1.894.121.579-.086 1.78-.727 2.03-1.43.25-.702.25-1.303.175-1.429-.075-.126-.275-.201-.576-.351zM12.05 21.785h-.007a9.73 9.73 0 0 1-4.965-1.357l-.356-.211-3.692.968.985-3.599-.232-.369a9.728 9.728 0 0 1-1.49-5.187C2.293 6.64 6.666 2.27 12.05 2.27c2.607 0 5.058 1.016 6.902 2.861a9.71 9.71 0 0 1 2.858 6.896c0 5.393-4.373 9.758-9.76 9.758zm7.606-17.362A10.87 10.87 0 0 0 12.05 1.137C6.042 1.137 1.157 6.022 1.157 12.03c0 1.92.5 3.794 1.45 5.441L1 23l5.666-1.486a10.866 10.866 0 0 0 5.384 1.411h.005c6.006 0 10.893-4.887 10.893-10.895 0-2.91-1.134-5.647-3.292-7.807z" />
    </svg>
  );
}

export interface ProductCTAButtonsProps {
  quoteUrl: string;
  whatsappUrl: string;
  className?: string;
  quoteLabel?: string;
  whatsappLabel?: string;
}

export default function ProductCTAButtons({
  quoteUrl,
  whatsappUrl,
  className = "",
  quoteLabel = "REQUEST A QUOTE",
  whatsappLabel = "QUICK QUOTE",
}: ProductCTAButtonsProps) {
  return (
    <div className={`w-full grid grid-cols-2 gap-2.5 sm:gap-3.5 ${className}`}>
      <Link
        href={quoteUrl}
        className="min-w-0 w-full inline-flex items-center justify-center gap-1.5 sm:gap-2 px-2 sm:px-6 py-3 sm:py-3.5 rounded-xl bg-[#0F2744] text-[#FAF8F5] text-[10.5px] sm:text-xs font-semibold tracking-[0.03em] sm:tracking-[0.14em] uppercase transition-all duration-300 hover:bg-[#16233c] min-h-[46px] sm:min-h-[48px] text-center whitespace-nowrap"
      >
        <FileText className="w-4 h-4 sm:w-[18px] sm:h-[18px] text-[#C7A86A] shrink-0" />
        <span className="truncate">{quoteLabel}</span>
      </Link>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="min-w-0 w-full inline-flex items-center justify-center gap-1.5 px-2 sm:px-6 py-3 sm:py-3.5 rounded-xl bg-[#25D366] text-white text-[10.5px] sm:text-xs font-semibold tracking-[0.03em] sm:tracking-[0.14em] uppercase transition-all duration-300 hover:bg-[#20ba5a] min-h-[46px] sm:min-h-[48px] text-center whitespace-nowrap"
      >
        <WhatsAppGlyph className="w-5 h-5 sm:w-[22px] sm:h-[22px] text-white fill-current shrink-0" />
        <span className="truncate">{whatsappLabel}</span>
      </a>
    </div>
  );
}
