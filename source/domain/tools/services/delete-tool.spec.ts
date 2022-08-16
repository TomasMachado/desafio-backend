import 'reflect-metadata'
import DeleteToolService from './delete-tool';
import FakeToolsRepository from '@/domain/tools/repositories/fakes/fake-tools-repository'
import CreateToolService from './create-tool';

describe('Create Tool', () => {

  let toolRepository: FakeToolsRepository;
  let deleteTool: DeleteToolService;
  let createTool: CreateToolService;

  beforeEach(() => {
    toolRepository = new FakeToolsRepository();
    deleteTool = new DeleteToolService(toolRepository);
    createTool = new CreateToolService(toolRepository)
  }),

    it("does remove a tool", async () => {
      const tool = {
        title: "testtitle",
        link: "http://teste.com.br/",
        description: "very nice",
        tags: ['tag1', 'tag2']

      }
      const created_tool = await createTool.execute(tool)
      expect(await deleteTool.execute(Number(created_tool.id))).toBeTruthy();

    });

  it("does not remove an unexistent tool", async () => {

    expect(await deleteTool.execute(10)).toBeFalsy();

  });
})