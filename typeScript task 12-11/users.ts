let users: User[];
let data;
interface User {
  id: number;
  email: string;
  first_Name: string;
  last_Name: string;
  avatar: string;
}
interface Support {
  url: string;
  text: string;
}
interface UserData {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: User[];
  support: Support;
}

const userData = async function (): Promise<User[]> {
  return await fetch(`https://reqres.in/api/users`)
    .then((res): Promise<UserData> => {
      if (!res.ok) throw new Error(`user data not found ${res.status}`);
      return res.json();
    })
    .then((data) => {
      users = data.data;
      console.log({ users });
      // console.log(data);
      return users;
    })
    .catch((err: any) => {
      console.error(`${err.message}`);
      return [];
    });
};

userData();

const addItem = async function (id: number): Promise<User[]> {
  users = await userData();
  return (data = await fetch(`https://reqres.in/api/users/${id}`)
    .then((res): Promise<UserData> => {
      if (!res.ok) throw new Error(`user data not found ${res.status}`);
      return res.json();
    })
    .then((add: any): User[] => {
      console.log(add);
      const u: User = add.data;
      users = [...users, u];
      console.log({ users });
      return users;
    }));
};
addItem(1);

const removeItem = async function (id: number): Promise<User[]> {
  users = await userData();
  return await fetch(`https://reqres.in/api/users/${id}`).then((data) => {
    console.log(data);
    console.log(users);
    const userIdx = users.findIndex((users: User) => users.id === id);
    users.splice(userIdx, 1);
    console.log(users);
    return users;
    // alert("delete data");
  });
};
removeItem(2);
