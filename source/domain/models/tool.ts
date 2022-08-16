// export type Tool = {
//     id: string | number,
//     title: string,
//     link: string,
//     description: string,
//     tags: string[],
// }

export class Tool {
  id: string | number;
  tags: string[];
  link: string;
  title: string;
  description: string;

  constructor(
    id: string | number,
    title: string,
    link: string,
    description: string,
    tags: string[]
  ) {
    this.id = id;
    if (description.length > 255) throw new Error();
    this.description = description;
    this.title = title;
    this.link = link;
    if (tags.length > 8) throw new Error();
    this.tags = tags;
  }
}

export type CreateToolParams = Omit<Tool, "id">;
