
export interface IEarnedAuthors {
  id?: number;
  name?: string;
  earnedTotal?: number;
}

export class EarnedAuthors implements IEarnedAuthors {
  constructor(
    id?: number,
    name?: string,
    earnedTotal?: number,
  ) {
  }
}
