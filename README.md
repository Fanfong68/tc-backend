# BackEnd Installation
1. Clone the repository
`git clone https://github.com/fanfong/tc-backend.git`

3. Setup a .env file with your own database details
`PORT=8082`
`NODE_ENV=development`
`DB_USER=your_username`
`DB_PASSWORD=your_password`
`DB_NAME=your_database`
`DB_HOST=127.0.0.1`
`DB_DIALECT=mysql`

2. Install All the Dependencies 
`npm i`

3. Run Migration
`npm run migrate:up`

4. Run Seed File
`npm run seed:all`

5. Start Backend Server
`npm start`

