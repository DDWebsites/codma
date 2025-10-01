import { SectionTitleProps } from "@/types";
export default function SectionTitle({
  tag,
  title,
  description,
  align = "center",
  shrink = true,
}: SectionTitleProps) {
  return (
    <div
      className={`flex flex-col gap-6 ${
        align === "center"
          ? "items-center text-center"
          : align === "right"
          ? "items-end text-right"
          : "items-start text-left"
      } `}
    >
      <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-xs md:text-sm font-semibold text-primary capitalize border border-gray-300">
        {tag}
      </div>
      <h2
        className={`${
          shrink === true ? "max-w-2xl" : ""
        } text-2xl md:text-3xl lg:text-[42px] font-bold tracking-tight text-foreground leading-tight`}
      >
        {title}
      </h2>
      <p
        className={`${
          shrink === true ? "max-w-2xl" : ""
        }text-sm md:text-lg text-muted-foreground/80 leading-relaxed`}
      >
        {description}
      </p>
    </div>
  );
}
