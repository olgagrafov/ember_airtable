import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class AirContainerComponent extends Component {
  countItems = 6;
  countPage;
  @tracked pageNumber = 1;
  @tracked startFrom;
  @tracked toEnd;

  constructor() {
    super(...arguments);

    this.countPage = Math.ceil(this.args.airList.length / this.countItems);
    this.startFrom = 0;
    this.toEnd =
      screen.width >= 600 ? this.countItems : this.args.airList.length;
  }

  @action increment() {
    this.startFrom = this.countItems * this.pageNumber;
    this.toEnd = this.startFrom + this.countItems;
    this.pageNumber += 1;
  }

  @action decrement() {
    this.toEnd = this.startFrom;
    this.startFrom = this.countItems * (this.pageNumber - 2);
    this.pageNumber -= 1;
  }

  @action setDataByPage(page) {
    this.startFrom = this.countItems * page;
    this.toEnd = this.startFrom + this.countItems;
    this.pageNumber = page + 1;
  }

  @action set(number) {
    this.pageNumber = number;
  }

  @action get() {
    return this.pageNumber;
  }

  get myList() {
    return this.args.airList.slice(this.startFrom, this.toEnd);
  }

  get() {
    return this.countPage;
  }
}
