const { test } = require("uvu");
const sqlite3 = require('sqlite3').verbose();

const db_path = '/';

test("DB connection", function () {
    const db = new sqlite3.Database(db_path, sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE, (err) => { // default mode: OPEN_READWRITE | OPEN_CREATE
        if (err) {
            return console.error(err.message)
        }
        console.log('Connected to the bbb database.')
    });

    db.serialize(() => {
        db.run('CREATE TABLE lorem (info TEXT)');
        const stmt = db.prepare('INSERT INTO lorem VALUES (?)');

        for (let i = 0; i < 10; i++) {
            stmt.run(`Ipsum ${i}`)
        };

        stmt.finalize();

        db.each('SELECT rowid AS id, info FROM lorem', (err, row) => {
            console.log(`${row.id}: ${row.info}`)
        });
    });

    db.close((err) => {
        if (err) {
            console.error(err.message)
        }
        console.log('Close the database connection.')
    });
});

test.run();
