import Fighter, { SimpleFighter } from '../Fighter';
import Monster from '../Monster';
import Battle from './Battle';

export default class PVE extends Battle {
  private _environment: Array<Monster> | Array<Fighter> | Array<SimpleFighter>;

  constructor(
    player1: Fighter,
    environment: Array<Monster> | Array<Fighter> | Array<SimpleFighter>,
  ) {
    super(player1);
    this.player = player1;
    this._environment = environment;
  }

  public get environment() { return this._environment; }

  private singleFight(enemy: Fighter | SimpleFighter): number {
    while (this.player.lifePoints > 0 && enemy.lifePoints > 0) {
      this.player.attack(enemy);
      enemy.attack(this.player);
    }
    return this.player.lifePoints === -1 ? -1 : 1;
  }

  fight(): number {
    const results = this._environment.map((enemy) => this.singleFight(enemy));
    return results.every((result: number) => result === 1) ? 1 : -1;
  }
}