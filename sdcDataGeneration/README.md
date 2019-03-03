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

## POSTGRES QUERY NOTES
============

##CREATE

Adds a new entry for a home to the database 

URL: `/api/properties`

Method: `POST`

Required data: 

`zestimationPrice,
thirtyDayPriceChange,
oneYearForcast,
comparableHomePrice,
marketAppreciationPrice,
url,
sellDate,
sellPrice,
beds,
baths,
streetAddress,
priceSqft,
saleToList`


Associated sample db query: `INSERT INTO homeval.homes(zestimationPrice,thirtyDayPriceChange,oneYearForcast,comparableHomePrice,marketAppreciationPrice,url,sellDate,sellPrice,beds,baths,streetAddress,priceSqft,saleToList) VALUES (12345678, 123456, 123456, 123456, 123456, 'testing 123', '3/2/2019', 123345, 1, 2, '123 test street', 1234, 12345);`

##REQUEST

-----------------------------------

Single Property Data:

Receives the data associated with the item page:

URL:
`/api/properties/:propertyId`

Method: `GET`

Associated db query: `SELECT zestimationPrice thirtyDayPriceChange, oneYearForcast, comparableHomePrice, marketAppreciationPrice FROM homeval.homes WHERE id = ?;`


-----------------------------------
Local Homes Data: 
Recieves the information with 20 associated local homes


sample query:
`SELECT id url, sellDate, sellPrice, beds, baths, streetAddress, priceSqft, saleToList FROM homeval.homes ORDER BY id LIMIT 20 OFFSET 30;`

-----------------------------------
##UPDATE

Adds a new entry for a home to the database 

URL: `/api/properties`

Method: `PUT`

Optional data: 

`zestimationPrice,
thirtyDayPriceChange,
oneYearForcast,
comparableHomePrice,
marketAppreciationPrice,
url,
sellDate,
sellPrice,
beds,
baths,
streetAddress,
priceSqft,
saleToList`


sample query: 
`UPDATE homeval.homes SET streetAddress = 'alternate test' WHERE id = 10000003;`

##DELETE

Adds a new entry for a home to the database 

URL: `/api/properties`

Method: `DELETE`

Required data: 

`id to delete`

sample query: 
`DELETE FROM homeval.homes WHERE id = 10000003;`

------------------------------------