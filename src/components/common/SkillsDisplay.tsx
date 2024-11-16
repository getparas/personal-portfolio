import { useState } from "react";
import { SkillsDisplayProps } from "./types/Skill.types";
import Button from "../Ui/Button";

export default function SkillDisplay({
  categories = [
    {
      name: "Main Skills",
      skills: [
        { name: "User Experience Design - UI/UX", percentage: 90 },
        { name: "Web & User Interface Design - Development", percentage: 85 },
        { name: "Interaction Design - Animation", percentage: 75 },
      ],
    },
    {
      name: "Awards",
      skills: [
        { name: "Best Design Award", percentage: 100 },
        { name: "Creative Excellence", percentage: 95 },
        { name: "Innovation Prize", percentage: 90 },
      ],
    },
    {
      name: "Education",
      skills: [
        { name: "Master in Design", percentage: 100 },
        { name: "Bachelor in Arts", percentage: 100 },
        { name: "Design Certification", percentage: 95 },
      ],
    },
  ],
  defaultCategory = "Main Skills",
}: SkillsDisplayProps) {
  const [activeCategory, setActiveCategory] = useState(defaultCategory);

  const activeSkills =
    categories.find((cat) => cat.name === activeCategory)?.skills || [];

  return (
    <div className="my-12">
      <div className="flex flex-col justify-between gap-2 my-4 lg:flex-row">
        {categories.map((category) => (
          <Button
            key={category.name}
            variant={activeCategory === category.name ? "primary" : "secondary"}
            className="flex items-center justify-center flex-1 w-full text-lg font-bold lg:min-w-44"
            onClick={() => setActiveCategory(category.name)}
          >
            {category.name}
          </Button>
        ))}
      </div>

      <div className="space-y-4">
        {activeSkills.map((skill) => (
          <div key={skill.name} className="space-y-2">
            <div className="text-sm font-medium">{skill.name}</div>
            <div className="relative h-4 overflow-hidden bg-gray-200 rounded-full">
              <div
                className="absolute top-0 left-0 h-full transition-all duration-500 ease-out rounded-full bg-gradient-to-r from-primary to-primary/80"
                style={{ width: `${skill.percentage}%` }}
              />
            </div>
            <div className="text-xs text-right text-gray-500">
              {skill.percentage}%
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
