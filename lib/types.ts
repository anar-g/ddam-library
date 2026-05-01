export type ProjectStatus = "active" | "review" | "planned" | "completed";
export type Priority = "urgent" | "high" | "medium" | "low";
export type TaskStatus = "done" | "in-progress" | "pending" | "low";
export type MemberOnlineStatus = "online" | "offline" | "away";
export type FileType = "xlsx" | "pptx" | "docx" | "pdf" | "link";
export type ModelStatus = "available" | "beta" | "upcoming";
export type ServiceStatus = "active" | "beta" | "deprecated";

export interface Member {
  id: string;
  name: string;
  initials: string;
  role: string;
  title: string;
  color: string;
  status: MemberOnlineStatus;
  projects: string[];
}

export interface Task {
  id: string;
  title: string;
  assignee: string;
  status: TaskStatus;
  completed: boolean;
}

export interface ProjectFile {
  id: string;
  name: string;
  type: FileType;
  size: string;
  uploadedBy: string;
  uploadedAt: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  status: ProjectStatus;
  priority: Priority;
  progress: number;
  startDate: string;
  endDate: string;
  client: string;
  category: string;
  pm: string;
  members: Member[];
  tasks: Task[];
  files: ProjectFile[];
}

export interface AIModel {
  id: string;
  name: string;
  provider: string;
  description: string;
  releaseDate: string;
  capabilities: string[];
  contextWindow: string;
  status: ModelStatus;
  tags: string[];
}

export interface ResearchService {
  id: string;
  name: string;
  type: string;
  description: string;
  provider: string;
  status: ServiceStatus;
  tags: string[];
}

export interface ResearchNewsItem {
  id: string;
  title: string;
  summary: string;
  source: string;
  date: string;
  tags: string[];
}
