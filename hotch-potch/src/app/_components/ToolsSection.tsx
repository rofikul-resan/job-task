import toolsImg1 from "@/assets/tools1.svg";
import toolsImg2 from "@/assets/tools2.svg";
import toolsImg3 from "@/assets/tools3.svg";
import ToolsCard from "./card/ToolsCard";
import Link from "next/link";

type ToolsCardData = {
  id: number;
  img: string;
  title: string;
  details: string;
};

const toolsCardData: ToolsCardData[] = [
  {
    id: 1,
    img: toolsImg1,
    title: "Blog Headlines",
    details: "Write a better blog title with our A.I tool.",
  },
  {
    id: 2,
    img: toolsImg2,
    title: "Blog Intros",
    details: "Generate a paragraph of blog content using Blog Intros tool",
  },
  {
    id: 3,
    img: toolsImg3,
    title: "Blog Outline",
    details: "Need an attention-grabbing headline for your article?",
  },
  {
    id: 4,
    img: toolsImg1,
    title: "Blog Conclusions",
    details: "Write a better conclusions with AI writing tool.",
  },
  {
    id: 5,
    img: toolsImg2,
    title: "Content Rewriter",
    details: "Get AI writer to rewrite your sentence in a different way.",
  },
  {
    id: 6,
    img: toolsImg3,
    title: "Product Description",
    details: "Need an attention-grabbing headline for your article?",
  },
  {
    id: 7,
    img: toolsImg1,
    title: "PAS Copywriting Formula",
    details: "Get AI writer to rewrite your sentence in a different way.",
  },
  {
    id: 8,
    img: toolsImg2,
    title: "Company About Us",
    details: "Write a better blog title with our AI tool.",
  },
];

const ToolsSection = () => {
  return (
    <div>
      <div className="text-center w-5/12 mx-auto space-y-6">
        <h2>54 exciting writing tools</h2>
        <p className="text-paragraphColor tracking-wider">
          AI engines take information from various sources and read them like a
          human would do.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mx-auto mt-10 items-center ">
        {toolsCardData.map((data: ToolsCardData) => (
          <ToolsCard
            key={data.id}
            image={data.img}
            details={data.details}
            title={data.title}
          />
        ))}
      </div>
      <p className="text-sm font-md py-20 hover:underline text-center ">
        <Link href={""}>See all 54 available tools</Link>
      </p>
    </div>
  );
};

export default ToolsSection;
