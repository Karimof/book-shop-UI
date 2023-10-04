
export interface IFamousBooks {
  id?: number;
  name?: string;
  buy?: number;
  comment?: number;
  view?: number;
}

export class FamousBooks implements IFamousBooks {
  constructor(
    id?: number,
    name?: string,
    buy?: number,
    comment?: number,
    view?: number,
  ) {
  }
}
