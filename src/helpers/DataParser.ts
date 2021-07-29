var data: any;

try {
  data = require("Assets/menu.json");
} catch (e) {
  console.log(e);
  data = { menus: [] };
}

type BasicObject = { [key: string]: any };

export default class DataParser {
  data: any[] = [];
  cachedData: any;
  constructor() {
    this.data = data.menus;
    this.cachedData = this.data;
  }

  get datas() {
    return this.data;
  }

  getKeys(key: string) {
    let keys: string[] | BasicObject = [];
    this.data.forEach((menu) => {
      menu[key] && keys.push(menu[key]);
    });
    this.cachedData = keys;
    return this;
  }

  getPropertiesFromValue(
    pair?: { key: any; value: any },
    value?: any
  ): DataParser {
    let keys: any = [];

    const recursiveSearcher = function (object: BasicObject) {
      Object.keys(object).map((mainKey) => {
        if (object[mainKey] && typeof object[mainKey] === "object") {
          return recursiveSearcher(object[mainKey]);
        } else {
          if (pair && mainKey === pair.key && pair.value === object[mainKey]) {
            value ? keys.push(object[value]) : keys.push(object);
          } else if (
            pair &&
            mainKey === pair.key &&
            (pair.value === "null" || pair.value === null) &&
            object[mainKey] === null
          ) {
            value ? keys.push(object[value]) : keys.push(object);
          }
        }
      });
    };
    this.cachedData.forEach((v: any, i: any, arr: any) => {
      recursiveSearcher(arr[i]);
    });

    this.cachedData = keys;
    return this;
  }

  discount() {
    if (
      this.cachedData.length === 2 &&
      this.cachedData.every((el: any) => Boolean(el.price) === true)
    ) {
      let result = Math.abs(
        parseFloat(this.cachedData[0].price?.replace(",", ".")) -
          parseFloat(this.cachedData[1].price?.replace(",", "."))
      );
      this.cachedData = result;
    } else {
      console.log("There is no discount for this item");
    }
    return this;
  }

  get Result() {
    let temp = this.cachedData;
    this.cachedData = undefined;
    return temp;
  }
}
