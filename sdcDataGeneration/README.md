#Data generation and Schema Details: 
====================================

------------------------------------

> Run primaryDataGeneration.js to generate a csv file of dummy data for 10m rows 
 - Details for running are in the comments at the top of the file


 - WARNING: Do not try to open the file in VS Code. It is too big. 


> Postgres Loader: 
 - To load data into postgres, run the command `psql -U <username> -f schema.sql` 
 - This will prompt you for the associated password with the user account 
 - The terminal should respond with `DROP TABLE`, `CREATE TABLE`, and `COPY [# of rows copied]` if successful 
  
 - WARNING: if you fail to provide the username, it will default to using the logged in user in OS X.
 - The default user when installing postgres if not specified is `postgres`

------------------------------------

## POSTGRES API ROUTES
============

CREATE

##REQUEST

-----------------------------------

Single Property Data:

Receives the data associated with the item page:

URL:
`/api/properties/:propertyId`

Method: `GET`

Associated db query: `SELECT zestimationPrice thirtyDayPriceChange, oneYearForcast, comparableHomePrice, marketAppreciationPrice FROM homeval.homes WHERE id = 1`


-----------------------------------
Local Homes Data: 
Recieves the information with 10 associated local homes


----------------------------------

Comparable Homes Data: 
Recieves the information for 10 associated comparable homes 

-----------------------------------
UPDATE

DELETE

------------------------------------