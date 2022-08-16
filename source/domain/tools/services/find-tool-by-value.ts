import { injectable, inject } from "tsyringe";
import { IToolsRepository } from "@/domain/tools/repositories/tools-repository-interface";

import { Tool } from "@/domain/models/tool";

@injectable()
class FindToolsByValue {
  constructor(
    @inject("ToolsRepository")
    private toolsRepository: IToolsRepository
  ) {}

  public async execute(value: string): Promise<Tool[]> {
    const tools = await this.toolsRepository.findByValue(value);
    return tools;
  }
}

export default FindToolsByValue;
