
import Sequelize from "sequelize";

const dbConnection = new Sequelize('db_contacts_lpko', 'db_contacts_lpko_user', 'rK1JVYppSmJYhMoo8Qq4A9fils3ZNIZS', {
    host: 'dpg-cv7snk8fnakc73dtidj0-a.frankfurt-postgres.render.com',
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    }
});

try {
    await dbConnection.authenticate()
    console.log("Database connection successful");
} catch (e) {
    console.log("Database connection failed with error: ", e);
    process.exit(1);
}

export default dbConnection;