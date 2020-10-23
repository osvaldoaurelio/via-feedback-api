import User from '../models/User';

interface IUserInnerSerializer {
  id: number;
  name: string;
  email: string;
}

export default {
  render(user: User): IUserInnerSerializer {
    return {
      id: user?.id,
      name: user?.name,
      email: user?.email,
    };
  },
};
