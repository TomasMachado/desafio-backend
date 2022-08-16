import 'reflect-metadata'
import CreateToolService from './create-tool';
import FakeToolsRepository from '@/domain/tools/repositories/fakes/fake-tools-repository'
import { ServiceError } from './error';

describe('Create Tool', () => {

  let toolRepository: FakeToolsRepository;
  let createTool: CreateToolService;

  beforeEach(() => {
    toolRepository = new FakeToolsRepository();
    createTool = new CreateToolService(toolRepository);
  }),

    it("does return a tool with id", async () => {
      const tool = {
        title: "testtitle",
        link: "http://pudim.com.br/",
        description: "very nice",
        tags: ['test1', 'test2']

      }

      expect(await createTool.execute(tool)).toHaveProperty('id');

    });

  it("does not create two tools with same title", async () => {

    const tool = {
      title: "Sametitle",
      link: "http://pudim.com.br/",
      description: "very nice",
      tags: ['test1', 'test2']
    };

    await createTool.execute(tool);

    const tool2 = {
      title: "Sametitle",
      link: "https://google.com/",
      description: "very nice indeed",
      tags: ['test3', 'test4']
    }

    const action = async () => {
      await createTool.execute(tool2)
    }

    expect(action()).rejects.toEqual(ServiceError);
  });

  it("does not create a tool with more than 8 tags", async () => {
    const tool = {
      title: "sometitle",
      link: "http://pudim.com.br/",
      description: "very nice",
      tags: [
        'tag1',
        'tag2',
        'tag3',
        'tag4',
        'tag5',
        'tag6',
        'tag7',
        'tag8',
        'tag9'
      ]
    };

    const action = async () => {
      await createTool.execute(tool)
    }

    expect(action()).rejects.toEqual(Error);
  });

  it("does not create a tool with a description longer than 256 characters", async () => {
    const tool = {
      title: "Bee Movie",
      link: "https://gist.githubusercontent.com/MattIPv4/045239bc27b16b2bcf7a3a9a4648c08a/raw/2411e31293a35f3e565f61e7490a806d4720ea7e/bee%2520movie%2520script",
      description: (await import('@/shared/bee-movie-script')).default,
      tags: [
        'Bees',
        'Honey',
        'Laws of Physics'
      ]
    };
    const action = async () => {
      await createTool.execute(tool)
    };
    expect(action()).rejects.toEqual(Error)
  })

})