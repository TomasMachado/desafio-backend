import { Tool, CreateToolParams } from "@/domain/models/tool";
import { IToolsRepository } from "../tools-repository-interface";

export default class FakeToolsRepository implements IToolsRepository {
  private tools: Tool[] = [];
  private increment: number = 0;

  public async getAll(): Promise<Tool[]> {
    return this.tools;
  }

  public async create(tool: CreateToolParams): Promise<Tool> {
    const new_tool: Tool = { ...tool, id: this.increment++ };
    this.tools.push(new_tool);
    return new_tool;
  }

  public async findByValue(value: string): Promise<Tool[]> {
    const tools: Tool[] = this.tools.filter((tool) => {
      return Boolean(
        tool.title.includes(value) ||
          tool.link.includes(value) ||
          tool.description.includes(value) ||
          tool.tags.filter((tag) => tag.includes(value)).length > 0
      );
    });
    return tools;
  }

  public async delete(id: number): Promise<boolean> {
    const toolExists = this.tools.find((tool) => tool.id === id);

    if (!toolExists) return false;

    this.tools = this.tools.filter((tool) => tool.id !== id);

    return true;
  }

  public async findByTitle(title: string): Promise<Tool> {
    return this.tools.find(
      (tool) => tool.title.toLowerCase() == title.toLowerCase()
    );
  }
}
