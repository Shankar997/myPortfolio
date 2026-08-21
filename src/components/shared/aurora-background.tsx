export function AuroraBackground() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-20 overflow-hidden">
      <div className="absolute left-1/2 top-[-10%] h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-accent/30 blur-[120px] dark:bg-accent/20" />
      <div className="animate-float-slow absolute right-[-10%] top-[15%] h-[380px] w-[380px] rounded-full bg-accent-cyan/25 blur-[100px] dark:bg-accent-cyan/15" />
      <div className="animate-float-slower absolute left-[-10%] bottom-[-10%] h-[420px] w-[420px] rounded-full bg-accent/20 blur-[110px] dark:bg-accent/10" />
    </div>
  );
}
