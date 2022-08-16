import "reflect-metadata";
import CreateToolService from "./create-tool";
import FindToolsByValueService from "./find-tool-by-value";
import FakeToolsRepository from "@/domain/tools/repositories/fakes/fake-tools-repository";
import { ServiceError } from "./error";

describe("Create Tool", () => {
  let toolRepository: FakeToolsRepository;
  let findByValue: FindToolsByValueService;
  let createTool: CreateToolService;

  beforeEach(() => {
    toolRepository = new FakeToolsRepository();
    findByValue = new FindToolsByValueService(toolRepository);
    createTool = new CreateToolService(toolRepository);
  }),
    it("does find a tool by its title", async () => {
      const tool = {
        title: "searchtitle",
        link: "http://pudim.com.br/",
        description: "very nice",
        tags: ["test1", "test2"],
      };
      const tool2 = {
        title: "othertitle",
        link: "youtube.com",
        description: "very nice",
        tags: ["test1", "test2"],
      };

      await createTool.execute(tool);
      await createTool.execute(tool2);

      expect(await findByValue.execute("search")).toHaveLength(1);
    });

  it("does find a tool by its link", async () => {
    const tool = {
      title: "title",
      link: "http://pudim.com.br/",
      description: "very nice",
      tags: ["test1", "test2"],
    };
    const tool2 = {
      title: "othertitle",
      link: "youtube.com",
      description: "very nice",
      tags: ["test1", "test2"],
    };

    await createTool.execute(tool);
    await createTool.execute(tool2);

    expect(await findByValue.execute("youtube")).toHaveLength(1);
  });

  it("does find a tool by its description", async () => {
    const tool = {
      title: "search",
      link: "http://pudim.com.br/",
      description: "searh description",
      tags: ["test1", "test2"],
    };
    const tool2 = {
      title: "othertitle",
      link: "youtube.com",
      description: "very nice",
      tags: ["test1", "test2"],
    };

    await createTool.execute(tool);
    await createTool.execute(tool2);

    expect(await findByValue.execute("description")).toHaveLength(1);
  });

  it("does find a tool by its tag", async () => {
    const tool = {
      title: "title",
      link: "http://pudim.com.br/",
      description: "very nice",
      tags: ["test1", "test2"],
    };
    const tool2 = {
      title: "othertitle",
      link: "youtube.com",
      description: "very nice",
      tags: ["search tag", "test2"],
    };

    await createTool.execute(tool);
    await createTool.execute(tool2);

    expect(await findByValue.execute("search")).toHaveLength(1);
  });
});
