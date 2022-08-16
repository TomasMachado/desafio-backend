import CreateToolService from "@/domain/tools/services/create-tool";
import GetAllToolsService from "@/domain/tools/services/get-all-tools";
import DeleteToolService from "@/domain/tools/services/delete-tool";
import FindToolByValueService from "@/domain/tools/services/find-tool-by-value";
import { Request, Response } from "express";
import { container } from "tsyringe";

export default class ToolController {
  public async create(req: Request, res: Response) {
    const createTool = container.resolve(CreateToolService);
    const { title, link, tags, description } = req.body;
    const tool = await createTool.execute({ title, link, description, tags });
    res.status(200).json(tool);
  }

  public async getAll(req: Request, res: Response) {
    try {
      const getAllTools = container.resolve(GetAllToolsService);
      const tools = await getAllTools.execute();
      res.status(200).json(tools);
    } catch (err) {
      res.send(err);
    }
  }

  public async delete(req: Request, res: Response) {
    const toolId = Number(req.params.id);
    if (!Number.isInteger(toolId)) {
      res.status(422).send("id must be an integer");
      return;
    }

    const deleteTool = container.resolve(DeleteToolService);
    const exists = await deleteTool.execute(toolId);
    if (exists) {
      return res.status(204).send();
    }
    res.status(404).send({
      message: "Tool not found",
    });
  }

  public async findByValue(req: Request, res: Response) {
    const value = String(req.query.valor);
    const findByValue = container.resolve(FindToolByValueService);
    const tools = await findByValue.execute(value);
    res.status(200).json(tools);
  }
}
