/**
 * Tell MySQL which Database we wish to use
 */
USE mydb;
 
CREATE TABLE people (
        id INTEGER AUTO_INCREMENT,
        first_name VARCHAR(50) NOT NULL,
        second_name VARCHAR(50) NOT NULL,
        DOB DATE NOT NULL,
        PRIMARY KEY (id)
);

CREATE TABLE orders (
        id INTEGER AUTO_INCREMENT,
        amount DECIMAL(18,2) NOT NULL,
        person_id INT,
        created_at datetime DEFAULT CURRENT_TIMESTAMP,
        PRIMARY KEY (id),
        FOREIGN KEY (person_id) REFERENCES people(id),
        CHECK(amount>0)
);