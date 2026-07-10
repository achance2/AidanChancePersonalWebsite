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
      <Card className="bg-black/70 text-white hover:scale-105 transition-transform duration-300 ease-in-out shadow-xl border-2 border-black/50">
        <CardHeader>
          <div className="flex items-center justify-between gap-4">
            <CardTitle>{title}</CardTitle>
            <p className="shrink-0 text-sm text-white">{date}</p>
          </div>

          <CardDescription className="text-white italic">
            {skills}
          </CardDescription>
        </CardHeader>

        <CardContent className="relative min-h-50">
          <div className="flex items-center gap-6">
            <p className="pr-52 text-white">{description}</p>

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