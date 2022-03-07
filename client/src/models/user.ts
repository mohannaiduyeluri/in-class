/* Sri Ram

*/

export interface User{
    firstName: string;
    lastName: string;
    handle: string;
    password: string;  
    email: string;
    pic: string;
    id: number;
}

export const list: User[] = [
{
    firstName: 'mohan',
    lastName: 'yeluri',
    handle: '@yeluri',
    password: 'password',
    email: 'mohan@mail.com',
    pic: 'https://randomuser.me/api/portraits/men/1.jpg',
    id: 1,
},
{
    firstName: 'narendra',
    lastName: 'modi',
    handle: 'pm',
    password: 'password1',
    email: 'modi@mail.com',
    pic: 'https://randomuser.me/api/portraits/men/3.jpg',
    id: 2,
},
{
    firstName: 'kamala',
    lastName: 'harish',
    handle: 'vp',
    password: 'password2',
    email: 'kamala@mail.com',
    pic: 'https://randomuser.me/api/portraits/women/68.jpg',
    id: 3,
},


]