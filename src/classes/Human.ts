import Length from "../Enums/lengthUnit";
import Weight from "../Enums/weightUnit";
import Location from "../Interface/Location";

class Human {
  protected heightUnit: Length = Length.Foot;
  protected weightUnit: Weight = Weight.Kilogram;
  protected phone: string | null = null;

  constructor(
    protected name: string,
    protected age: number,
    protected height: number,
    protected weight: number,
    protected address: Location
  ) {}

  public get getName(): string {
    return this.name;
  }

  public set setName(value: string) {
    this.name = value;
  }

  public get getAge(): number {
    return this.age;
  }

  public set setAge(value: number) {
    this.age = value;
  }

  public get getHeight(): string {
    return this.height + this.heightUnit;
  }

  public set setHeight(value: number) {
    this.height = value;
  }

  public set setHeightUnit(unit: string) {
    this.heightUnit = Length[unit as keyof typeof Length];
  }

  public get getWeight(): string {
    return this.weight + this.weightUnit;
  }

  public set setWeight(value: number) {
    this.weight = value;
  }

  public set setWeightUnit(unit: string) {
    this.weightUnit = Weight[unit as keyof typeof Weight];
  }

  public get getAddress(): Location {
    return this.address;
  }

  public set setAddress(value: Location) {
    this.address = value;
  }

  public get getPhone(): string | null {
    return this.phone;
  }

  public set setPhone(value: string) {
    this.phone = value;
  }

  public toString(): string {
    let human: object = {
      name: this.getName,
      age: this.getAge,
      phone: this.getPhone,
      height: this.getHeight,
      weight: this.getWeight,
      address: this.getAddress,
    };

    human = Object.entries(human).reduce(
      (filterHuman: { [key: string]: unknown }, [key, value]) => {
        if (value !== null) {
          filterHuman[key] = value;
        }

        return filterHuman;
      },
      {}
    );

    return JSON.stringify(human, null, 2);
  }
}

export default Human;
