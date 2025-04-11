export interface User {
    name: {
      first: string;
      last: string;
    };
    email: string;
    dob: {
      age: number;
    };
    picture: {
      large: string;
    };
  }
  