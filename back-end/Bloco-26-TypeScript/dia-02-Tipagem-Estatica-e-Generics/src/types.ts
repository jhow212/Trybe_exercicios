//criação de types
export type Point = {
  x: number;
  y: number;
};

export type Bird = {
  wings: number;
  beaks: number;
  bipeds: boolean;
};

export type Sum = (x: number, y: number) => number;

export type Address = {
  district: string;
  city: string;
  state: string;
  number: number;
};

export type StatesOfMatter = "liquid" | "solid" | "gaseous";

export type identifierDocument = string | number;

export type operationalSystems = "linux" | "mac os" | "windows";

export type vowelLetters = "a" | "e" | "i" | "o" | "u";
