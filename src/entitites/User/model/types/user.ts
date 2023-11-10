interface UserAdress {
  street: string;
  city: string;
}

interface UserCompany {
  name: string;
}

export interface User {
  id: string;
  name: string;
  username: string;
  email: string;
  address: UserAdress;
  company: UserCompany;
}
