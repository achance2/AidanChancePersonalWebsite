import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  title: string;
  date: string;
  skills: string;
  description: string;
  image: string;
  githubLink: string;
  websiteLink?: string;
};

export default function ProjectCard({
  title,
  date,
  skills,
  description,
  image,
  githubLink,
  websiteLink,
}: ProjectCardProps) {
  return (
    <Card className="relative border-2 border-black/40 bg-black/70 text-white shadow-xl">
      <CardHeader>
        <div className="flex items-center justify-between gap-4">
          <CardTitle>{title}</CardTitle>
          <p className="shrink-0 text-sm text-white">{date}</p>
        </div>

        <CardDescription className="italic text-white">
          {skills}
        </CardDescription>
      </CardHeader>

      <CardContent className="relative min-h-50 pb-16">
        <p className="pr-52 text-white">{description}</p>

        <Image
          src={image}
          alt={title}
          width={200}
          height={300}
          className="absolute right-6 top-0 h-50 w-48 rounded-lg object-cover"
        />
      </CardContent>

      <div className="absolute bottom-5 left-5 z-20 flex items-center gap-3">
        <Link
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${title} on GitHub`}
        >
          <Image
            src="/images/home_images/github.svg"
            alt="GitHub"
            width={28}
            height={28}
            className="brightness-0 invert transition-transform duration-200 hover:scale-110"
          />
        </Link>

        {websiteLink && (
          <Link
            href={websiteLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit ${title} website`}
          >
            <Image
              src="/images/home_images/website2.svg"
              alt="Website"
              width={28}
              height={28}
              className="brightness-0 invert transition-transform duration-200 hover:scale-110"
            />
          </Link>
        )}
      </div>
    </Card>
  );
}