export class AboutmeClass {
  readonly name: string;
  readonly birthDate: Date;
  readonly birthPlace: string;
  readonly education: string;

  constructor(name: string, birthDate: Date, birthPlace: string, education: string,) {
    this.name = name;
    this.birthDate = birthDate;
    this.birthPlace = birthPlace;
    this.education = education;
  }
}
