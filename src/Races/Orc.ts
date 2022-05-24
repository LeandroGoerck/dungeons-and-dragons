import Race from './Race';

export default class Orc extends Race {
  _maxLifePoints: number;
  private static _createdInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 74;
  }

  get maxLifePoints():number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    this._createdInstances += 1;
    return this._createdInstances;
  }
}