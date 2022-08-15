export default class Animal {
  constructor(protected birthDate: Date) {}

  get age(): number {
    const timeDiff = Math.abs(Date.now() - new Date(this.birthDate).getTime());

    return Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
  }
}
