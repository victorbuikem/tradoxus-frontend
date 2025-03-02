// components/section-card.tsx
import { type LucideIcon } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface SectionCardProps {
  title: string;
  items: string[];
  icon: LucideIcon;
}

export function SectionCard({ title, items, icon: Icon }: SectionCardProps) {
  return (
    <Card className="border bg-gray-900 border-b border-gray-800 rounded-lg p-6 hover:shadow-xl transition-shadow">
      <div className="flex items-center mb-4 gap-3">
        <Icon className="h-6 w-6 text-green-800" />
        <CardTitle className="text-xl font-medium text-white">
          {title}
        </CardTitle>
      </div>
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={index} className="flex items-start text-gray-400">
            <span className="relative flex-shrink-0 h-4 w-4 mr-2 mt-1">
              <svg viewBox="0 0 16 16" className="absolute h-full w-full">
                <circle cx="8" cy="8" r="6" fill="#14532d4d" />
                <circle cx="8" cy="8" r="2" fill="#39FF14" />
              </svg>
            </span>
            <span className="text-sm text-gray-300">{item}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
}
