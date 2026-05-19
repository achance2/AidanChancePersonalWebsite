import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type ProjectCardProps = {
  title: string;
  skills: string;
  description: string;
};

export default function ProjectCard({
  title,
  skills,
  description,
}: ProjectCardProps) {
  return (
    <Card className="border-slate-800 bg-slate-900 text-white">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription className="text-slate-400">
          {skills}
        </CardDescription>
      </CardHeader>

      <CardContent>
        <p className="text-slate-300">{description}</p>
      </CardContent>
    </Card>
  );
}