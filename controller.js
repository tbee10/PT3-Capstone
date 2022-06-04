require("dotenv").config();
const {CONNECTION_STRING} = process.env;
const Sequelize = require('sequelize');
console.log(CONNECTION_STRING)
const sequelize = new Sequelize(CONNECTION_STRING, {
    dialect: 'postgres', 
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
    }
})

module.exports = {

    getCourses: (req, res) => {
        sequelize.query(`select * from courses`)
        .then((dbRes => res.status(200).send(dbRes[0])))
        .catch((err) => console.log(err));
    }, 

    createCourse: (req, res) => {
        let {name} = req.body
        console.log(req)
        sequelize.query(`insert into courses(name)
        values ('${name}')`)
        .then(dbRes => res.status(200).send(dbRes[0]))
        .catch((err) => console.log(err))
    },

    deleteCourse: (req, res) => {
        sequelize.query(`delete from courses
        where course_id = ${course_id}`)
        .then((dbRes => res.status(200).send(dbRes[0])))
        .catch((err) => console.log(err))
    },


    
seed: (req, res) => {
    sequelize.query(`
    
    drop table if exists golf_course_list;


    create table courses (
    course_id serial primary key,
    name varchar(100)
    );

    create table lists (
        list_id serial primary key,
        user_id integer
    );

    create table golf_course_list (
        golf_course_list_id serial primary key,
        golf_course_id integer REFERENCES courses(course_id),
        list_id integer REFERENCES lists(list_id),
        have_played boolean
    );

    
    insert into courses (name)
    values 
    ('Augusta National'), 
    ('Ballyneal'),
    ('Baltusrol'),
    ('Bandon Dunes'),
    ('Bethpage Black'),
    ('Bonneville'),
    ('Bountiful Ridge'),
    ('Castle Pines'),
    ('Cherry Hills'),
    ('Congressional'),
    ('Copper Rock'),
    ('Coral Canyon'),
    ('Crystal Downs'),
    ('Cypress Point'),
    ('Eaglewood'),
    ('Entrada'), 
    ('Erin Hills'),
    ('Fisher Island'),
    ('Fox Hollow'),
    ('Glenmoor'),
    ('Greenbrier'),
    ('Green Spring'),
    ('Gozzer Ranch'),
    ('Hazeltine'),
    ('Inverness'),
    ('Jeremy Ranch'),
    ('Kiawah Island Ocean'),
    ('Medinah'),
    ('Merion'),
    ('Monterey Peninsula'),
    ('Mountain Dell'),
    ('Muirfield Village'),
    ('Oak Hill'),
    ('Oakland Hills'),
    ('Oakmont'),
    ('Old Mill'),
    ('Olympic Club'),
    ('Pacific Dunes'),
    ('Peachtree'),
    ('Pebble Beach'),
    ('Pikewood National'),
    ('Pine Valley'),
    ('Pinehurst'),
    ('Prairie Dunes'),
    ('Quail Hollow'),
    ('Riveria'),
    ('Rock Creek Cattle'),
    ('Sand Hills'),
    ('Sand Hollow'),
    ('Seminole'),
    ('Shadow Creek'),
    ('Shinnecock Hills'),
    ('Sky Mountain'),
    ('Soldier Hollow'),
    ('Southgate'),
    ('South Mountain'),
    ('Southern Hills'),
    ('Spyglass'),
    ('St Andrews'),
    ('Sunbrook'),
    ('Talons Cove'),
    ('TPC Sawgrass'),
    ('Thanksgiving Point'),
    ('The Ledges'),
    ('Torrey Pines South'),
    ('Valhalla'),
    ('Valley View'),
    ('Wasatch Mountain'),
    ('Whistling Straits'),
    ('Winged Foot');
    `).then(() => {
    console.log('DB seeded!')
    res.sendStatus(200)
    }).catch(err => console.log('error seeding DB', err))
}    
}

