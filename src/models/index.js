// The models folder in an Express application is usually the place where you define your data sources. In our case, it's the sample data, but in other applications, for instance, it would be the interfaces to the database

let users = {
    1: {
        id: '1',
        username: 'Robin Wieruch',
    },
    2: {
        id: '2',
        username: 'Dave Davids',
    },
};
  
let messages = {
    1: {
        id: '1',
        text: 'Hello World',
        userId: '1',
    },
    2: {
        id: '2',
        text: 'By World',
        userId: '2',
    },
};
  
export default {
    users,
    messages,
};