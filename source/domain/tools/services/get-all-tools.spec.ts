import 'reflect-metadata'
import CreateToolService from './create-tool';
import GetAllToolsService from './get-all-tools';
import FakeToolsRepository from '@/domain/tools/repositories/fakes/fake-tools-repository'
import { ServiceError } from './error';

describe('Create Tool', () => {

  let toolRepository: FakeToolsRepository;
  let getAllTools: GetAllToolsService;
  let createTool: CreateToolService;

  beforeEach(() => {
    toolRepository = new FakeToolsRepository();
    getAllTools = new GetAllToolsService(toolRepository);
    createTool = new CreateToolService(toolRepository);
  }),

    it("does find a all tools", async () => {
        const tool = {
            title: "title",
            link: "http://pudim.com.br/",
            description: "very nice",
            tags: ['test1', 'test2']
          };
          const tool2 = {
            title: "othertitle",
            link: "youtube.com",
            description: "very nice",
            tags: ['test1', 'test2']
          }
    
          await createTool.execute(tool);
          await createTool.execute(tool2);

          expect(await getAllTools.execute()).toHaveLength(2)
     });

})