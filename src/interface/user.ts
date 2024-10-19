export interface User {
  id: number;
  name: string;
  surname: string;
  email: string;
  password: string;
  age: number;
  stars: number;
  position: string;
  force: number;
  attack: number;
  defense: number;
  kick: number;
  pass: number;
  headbutt: number;
  teamId?: number;
  groupId?: number;
  createdAt?: Date;
  updatedAt?: Date;
}