import { injectable, inject } from "tsyringe";
import { IToolsRepository } from "@/domain/tools/repositories/tools-repository-interface";

import { Tool } from "@/domain/models/tool";

@injectable()
class GetAllToolsService {
  constructor(
    @inject("ToolsRepository")
    private toolsRepository: IToolsRepository
  ) {}

  public async execute(): Promise<Tool[]> {
    const tools = await this.toolsRepository.getAll();

    return tools;
  }
}

export default GetAllToolsService;
