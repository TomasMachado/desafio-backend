import { ILike, Like, Repository } from "typeorm";
import { appDataSource } from "@/shared/server";

import ormTool from "@/domain/tools/infra/typeorm/entities/tool";
import { IToolsRepository } from "@/modules/tools/repositories/tools-repository-interface";
import { Tool, CreateToolParams } from "@/domain/models/tool";

export class ToolsRepository implements IToolsRepository {
  private ormRepository: Repository<ormTool>;

  constructor() {
    this.ormRepository = appDataSource.getRepository(ormTool);
  }

  public async getAll(): Promise<Tool[]> {
    const tools: ormTool[] = await this.ormRepository.find();
    return tools;
  }

  public async create(tool: CreateToolParams): Promise<Tool> {
    const created_tool: ormTool = await this.ormRepository.save(tool);
    return created_tool;
  }

  public async findByTitle(title: string): Promise<Tool> {
    const tool: ormTool = await this.ormRepository.findOne({
      where: {
        title: ILike(title),
      },
    });
    return tool;
  }

  public async findByValue(value: string): Promise<Tool[]> {
    const tools: ormTool[] = await this.ormRepository.find({
      where: [
        { title: Like(`%${value}%`) },
        { description: Like(`%${value}%`) },
        { link: Like(`%${value}%`) },
        { tags: Like(`%${value}%`) },
      ],
    });
    return tools;
  }

  public async delete(id: number): Promise<boolean> {
    const result = await this.ormRepository.delete(id);
    const exists = Boolean(result.affected);
    return exists;
  }
}
