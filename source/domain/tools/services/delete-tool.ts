import { injectable, inject } from "tsyringe";
import { IToolsRepository } from "@/domain/tools/repositories/tools-repository-interface";

@injectable()
class DeleteToolService {
  constructor(
    @inject("ToolsRepository")
    private toolsRepository: IToolsRepository
  ) {}

  public async execute(id: number): Promise<boolean> {
    const exists = await this.toolsRepository.delete(id);
    return exists;
  }
}

export default DeleteToolService;
