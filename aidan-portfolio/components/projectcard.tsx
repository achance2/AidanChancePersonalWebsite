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
  link: string;
};

export default function ProjectCard({
  title,
  date,
  skills,
  description,
  image,
  link,
}: ProjectCardProps) {
  return (
    <Link href={link} className="block">
      <Card className="border-slate-800 bg-slate-900 text-white">
        <CardHeader>
          <div className="flex items-center justify-between gap-4">
            <CardTitle>{title}</CardTitle>
            <p className="shrink-0 text-sm text-slate-400">{date}</p>
          </div>

          <CardDescription className="text-slate-400">
            {skills}
          </CardDescription>
        </CardHeader>

        <CardContent className="relative min-h-50">
          <div className="flex items-center gap-6">
            <p className="pr-52 text-slate-300">{description}</p>

            <Image
              src={image}
              alt={title}
              width={200}
              height={300}
              className="rounded absolute right-6 top-0 h-50 w-48rounded-lg object-cover"
            />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}