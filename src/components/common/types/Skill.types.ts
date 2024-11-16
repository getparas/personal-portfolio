export interface Skill {
  name: string;
  percentage: number;
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}

export interface SkillsDisplayProps {
  categories?: SkillCategory[];
  defaultCategory?: string;
}
