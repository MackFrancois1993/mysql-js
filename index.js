// const mysql = re

 import mysql from "mysql2";

 const connection = mysql.createConnection({
    host: "127.0.0.1",
    database: "bocacode",
    user: "root",
    password: "test1234"

 });

 console.log("we are connected...");
 