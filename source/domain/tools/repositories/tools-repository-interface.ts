import { Tool, CreateToolParams } from "@/domain/models/tool";

export interface IToolsRepository {
  getAll: () => Promise<Tool[]>;
  create: (tool: CreateToolParams) => Promise<Tool>;
  findByValue: (value: string) => Promise<Tool[]>;
  delete: (id: number) => Promise<boolean>;
  findByTitle: (title: string) => Promise<Tool>;
}
