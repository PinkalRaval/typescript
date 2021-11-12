var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let users;
let data;
const userData = function () {
    return __awaiter(this, void 0, void 0, function* () {
        return yield fetch(`https://reqres.in/api/users`)
            .then((res) => {
            if (!res.ok)
                throw new Error(`user data not found ${res.status}`);
            return res.json();
        })
            .then((data) => {
            users = data.data;
            console.log({ users });
            // console.log(data);
            return users;
        })
            .catch((err) => {
            console.error(`${err.message}`);
            return [];
        });
    });
};
userData();
const addItem = function (id) {
    return __awaiter(this, void 0, void 0, function* () {
        users = yield userData();
        return (data = yield fetch(`https://reqres.in/api/users/${id}`)
            .then((res) => {
            if (!res.ok)
                throw new Error(`user data not found ${res.status}`);
            return res.json();
        })
            .then((add) => {
            console.log(add);
            const u = add.data;
            users = [...users, u];
            console.log({ users });
            return users;
        }));
    });
};
addItem(1);
const removeItem = function (id) {
    return __awaiter(this, void 0, void 0, function* () {
        users = yield userData();
        return yield fetch(`https://reqres.in/api/users/${id}`).then((data) => {
            console.log(data);
            console.log(users);
            const userIdx = users.findIndex((users) => users.id === id);
            users.splice(userIdx, 1);
            console.log(users);
            return users;
            // alert("delete data");
        });
    });
};
removeItem(2);
//# sourceMappingURL=users.js.map