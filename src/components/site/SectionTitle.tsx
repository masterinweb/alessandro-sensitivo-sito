import { cn } from "@/lib/utils";

export function SectionTitle({
  kicker,
  title,
  className,
}: {
  kicker: string;
  title: string;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto max-w-3xl text-center", className)}>
      <p className="font-script text-3xl text-primary md:text-4xl">{kicker}</p>
      <h2 className="mt-3 text-3xl uppercase text-foreground md:text-5xl">{title}</h2>
      <div className="mx-auto mt-6 flex items-center justify-center gap-3">
        <span className="gold-rule w-20" />
        <span className="text-primary">✦</span>
        <span className="gold-rule w-20" />
      </div>
    </div>
  );
}
