/* B"H
*/
const userModel = require('./user');
let hieghstId = 3;

const list = [
    {
        src: 'https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1240w,f_auto,q_auto:best/rockcms/2022-03/220328-capitol-mb-1315-2724af.jpg',
        caption: 'Midterm environment looks more like 2010 than 2018 in NBC News poll',
        owner: 1,
        likes:[],
        comments:[],
        isPublic: true
    },
    {
        src: 'https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1240w,f_auto,q_auto:best/rockcms/2022-03/220328-capitol-mb-1315-2724af.jpg',
        caption: 'Midterm environment looks more like 2010 than 2018 in NBC News poll',
        owner: 1,
        likes:[],
        comments:[],
        isPublic: true
    },
    {
        src: 'https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1240w,f_auto,q_auto:best/rockcms/2022-03/220328-capitol-mb-1315-2724af.jpg',
        caption: 'Midterm environment looks more like 2010 than 2018 in NBC News poll',
        owner: 1,
        likes:[],
        comments:[],
        isPublic: true
    }
];

function get(id){
    return {...list.find(x => x.id === parseInt(id)), user: userModel.get(x.owner)};
}

function remove(id){
    const index = list.findIndex(x => x.id === parseInt(id));
    const post = list.splice(index, 1);

    return {...post[0], user: userModel.get(post[0].owner)};
}

function update(id, newUser){
    const index = list.findIndex(user => user.id === parseInt(id));
    const oldUser = list[index];

    newUser = list[index] = {...oldUser, ...newUser};

    return {...newUser, password: undefined};
}

module.exports = {
    create(user) {
        user.id = ++hieghstId;

        list.push(user);
        return {...user, password:undefined};
    },
    remove,
    update
}

module.exports.list = () => list.map(x=> ({...x, password: undefined}));
module.exports.get = get;