1. Navigate to backend folder
2. Install all packages <npm i>
3. Create .env file with
DB_USER=<your DB user> (postgres)
DB_HOST=<your DB Host> (localhost)
DB=<your DB name> (Tragile_db)
DB_PASSWORD=<your DB password>
DB_PORT=<DB Posrt> (5432)

   SECRET=<your secret>
   EMAIL=<your email to send verification email>
   PASSWORD=<your email's password to send verification email>
4. To run migrations <npm run migrations>
5. To migrate down <npm run migrate:down>
6. To add initial values <npm run seeds>
7. To run <npm run start:dev>

