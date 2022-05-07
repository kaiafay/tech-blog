const { Post } = require('../models');

const postData = [
    {
        title: 'Dolor labore reprehenderit excepteur nostrud.',
        body: 'Nostrud dolore eiusmod esse nostrud adipisicing eiusmod mollit aliqua ex aliqua esse qui nisi. Nisi sunt magna non excepteur et elit. Eu ad cupidatat exercitation deserunt commodo tempor do tempor. Cupidatat Lorem commodo sit Lorem laborum est voluptate ea dolor veniam sit proident. Excepteur ad do ea occaecat qui aliquip. Ut nulla in esse exercitation sit. Officia voluptate esse adipisicing velit nostrud duis sint ex.',
        user_id: 5
    },
    {
        title: 'Tempor fugiat aliquip quis adipisicing tempor in.',
        body: 'Do laboris occaecat incididunt nisi enim irure exercitation. Consectetur ipsum occaecat nisi esse amet fugiat est in. Nisi nulla aute cillum qui do culpa ut nisi dolore. Incididunt voluptate culpa aliquip nulla et. Magna aute ut enim officia. Non sit esse velit aliqua. Consectetur adipisicing excepteur cupidatat pariatur proident reprehenderit labore ex. Consequat dolor sint ut nulla qui ipsum dolor laborum tempor proident. Laborum excepteur ad fugiat qui consectetur veniam eu mollit.',
        user_id: 3
    },
    {
        title: 'Dolor nostrud eiusmod reprehenderit.',
        body: 'Aliquip adipisicing anim veniam non nulla. Deserunt nisi nostrud elit dolore elit culpa nulla minim occaecat non amet mollit sunt eu. Exercitation elit esse laborum mollit velit pariatur duis. Adipisicing aute anim ipsum occaecat occaecat elit eiusmod. Cupidatat veniam tempor nostrud proident proident nisi. Do sit quis amet enim ea nulla esse exercitation. Do nulla mollit proident ea fugiat velit reprehenderit excepteur consectetur consequat sint consectetur id. Officia cupidatat duis exercitation cupidatat anim anim. Commodo dolor do sunt eiusmod tempor pariatur exercitation ut cillum nostrud adipisicing cillum exercitation.',
        user_id: 1
    },
    {
        title: 'Magna incididunt aliqua fugiat eu deserunt dolore.',
        body: 'In commodo anim ipsum aute. Laborum tempor est in officia. Lorem magna in est veniam aliqua occaecat eu eiusmod id nostrud voluptate enim laboris sint. Commodo officia reprehenderit laborum ad consequat esse pariatur sint do sit in. Ipsum deserunt sint qui cillum sit est nisi irure Lorem commodo ullamco. Occaecat ullamco labore elit quis mollit eiusmod cillum. Id tempor cupidatat veniam pariatur eu eu ex non excepteur Lorem culpa.',
        user_id: 2
    },
    {
        title: 'Eu incididunt duis ut elit anim nisi ea ipsum elit minim aliqua velit ipsum aliqua.',
        body: 'Labore amet pariatur est do ad deserunt ex nisi id. Tempor id ea laboris culpa nisi dolor aliquip sit qui veniam. Commodo consequat mollit Lorem id commodo quis pariatur in amet voluptate adipisicing enim et. Voluptate culpa laborum magna voluptate mollit ex quis laborum. Pariatur dolore nisi ipsum ad non reprehenderit occaecat.',
        user_id: 4
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;