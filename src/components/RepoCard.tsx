import { Code, Github, Package } from "lucide-react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

interface RespoCardProps {
  title: string;
  description: string;
  content: string;
  footer: {
    github?: string;
    npm?: string;
    docs?: string;
  };
}
export function RepoCard({
  title,
  description,
  content,
  footer,
}: RespoCardProps) {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{content}</p>
      </CardContent>
      <CardFooter>
        <div className="flex justify-end w-full gap-4">
          {footer.docs && (
            <a href={footer.docs} target="_blank">
              <Button variant={"secondary"}>
                <Code className="w-4 h-4 mr-2" />
                Docs
              </Button>
            </a>
          )}
          {footer.github && (
            <a href={footer.github} target="_blank">
              <Button variant={"default"}>
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </Button>
            </a>
          )}{" "}
          {footer.npm && (
            <a href={footer.npm} target="_blank" className="text-blue-500">
              <Button variant={"outline"}>
                <Package className="w-4 h-4 mr-2" />
                NPM
              </Button>
            </a>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}
