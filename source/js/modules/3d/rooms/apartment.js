import {DogAndSuitcaseRoom, PyramidAndCactusRoom, SnowmanAndCompassRoom, AiSonyaRoom} from '../rooms';
import {BaseSceneItem} from '../components/baseSceneItem';
export class Apartment extends BaseSceneItem {
  constructor() {
    super();
    this.rooms = [
      {
        item: new DogAndSuitcaseRoom(),
        rotateY: 0,
      },
      {
        item: new PyramidAndCactusRoom(),
        rotateY: Math.PI / 2,
      },
      {
        item: new SnowmanAndCompassRoom(),
        rotateY: Math.PI,
      },
      {
        item: new AiSonyaRoom(),
        rotateY: -Math.PI / 2,
      }
    ];

    this.create();
  }

  addRooms() {
    this.rooms.forEach(({item, rotateY}) => {
      item.addSvgShapes();
      item.rotateY(rotateY);
      this.add(item);
    });
  }

  create() {
    this.addRooms();
    this.rotateY(-1 * Math.PI / 4);
  }
}
