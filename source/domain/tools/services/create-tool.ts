import { injectable, inject } from "tsyringe";
import { IToolsRepository } from "@/domain/tools/repositories/tools-repository-interface";

import { CreateToolParams, Tool } from "@/domain/models/tool";
import { ServiceError } from "@/domain/tools/services/error";

@injectable()
class CreateToolService {
  constructor(
    @inject("ToolsRepository")
    private toolsRepository: IToolsRepository
  ) {}

  public async execute(tool: CreateToolParams): Promise<Tool> {
    // throw new ServiceError(409, "Tool with same title already exists");
    const titleExists = await this.toolsRepository.findByTitle(tool.title);
    if (titleExists) {
      throw new ServiceError(409, "Tool with same title already exists");
    }
    const new_tool = await this.toolsRepository.create(tool);
    return new_tool;
  }
}

export default CreateToolService;
