# Fruit store
Webshop designed to sell fruits.

## How to use

Below are instructions for the branches “***frontend-react-added-support-for-administration-of-products***” and “***backend-added-support-for-administration-of-products***”.

### Set up

Create a database table named “_fruits_” to store all product data. Add columns with the names “_id_”, “_fruit_”, “_amount_”, “_price_”, “_available_” and “_imageSrc_”. The column “_fruit_” specifies the name of the product, “_amount_” specifies the stock balance, “_price_” specifies the price of the product towards the customer, “_available_” specifies whether the product shall be available for sale (set to “true”) or not (set to “false”) and “_imageSrc_” specifies the src of the product’s image.

Create a database table named “_credentials_” to store user credentials for administrators to sign in. Add columns with the names “_userName_” and “_password_”. Add a row to create new user credentials.

Add products to the database table either by adding them directly to the database or by using the UI for adding products. Once products have been added to the database table, they will be available in the fruit store.

### Use the webshop

On first page, add fruits to the shopping basket by clicking on the plus and minus sign associated with the fruit. When the plus sign is clicked, a check will be performed against the stock balance in the database and the fruit will only be added to the shopping basket if the requested amount is available. 

Go to checkout by clicking on the shopping basket icon. 

Change the amount of a fruit in checkout by clicking on the plus and minus sign next to the fruit. When the plus sign is pressed, a check will be performed against the stock balance in the database and the fruit amount will only be increased if the requested amount is available. Finally, click on the checkout button and a final check will be performed against the stock balance in the database. If all requested fruits are available, the stock balance in the database will be updated with the new available amount after subtracting the requested amounts. 

Sign in by clicking on the text “_System Administration_” in the footer and enter the sign in credentials. A check will be performed against the database and the user will only be signed in if the credentials are the same as the credentials in the database.
Once signed in, add new products to the database by providing all requested data in the first form and click on the submit button. Once submitted, the product will be added to the database if no error occurs, and a notification will be displayed to confirm that the product was successfully added. Data of products already existing in the database can be updated by entering the updated information in the form for the product that should be updated and clicking on the submit button. Once submitted, the product will be updated in the database if no error occurs, and a notification will be displayed to confirm that the product was successfully updated.

To sign out, click on the sign out button.
