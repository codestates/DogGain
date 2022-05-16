CREATE TABLE Users (
  id INT AUTO_INCREMENT,
  username varchar(30),
  nickname varchar(30),
  password varchar(30),
  email varchar(60),
  PRIMARY KEY (id)
);

CREATE TABLE Comments (
  id INT AUTO_INCREMENT,
  comment varchar(255),
  is_review BOOLEAN,
  created_at timestamp,
  updated_at timestamp,
  user_id INT,
  deal_id INT,
  PRIMARY KEY (id)
);

CREATE TABLE Deals (
  id INT AUTO_INCREMENT,
  origin_username varchar(255),
  origin_url varchar(255),
  origin_img_url varchar(255),
  origin_shopname varchar(255),
  origin_sitename varchar(255),
  origin_title varchar(255),
  origin_views INT,
  origin_price INT,
  origin_created_at timestamp,
  origin_updated_at timestamp,
  PRIMARY KEY (id)
);

ALTER TABLE Comments ADD FOREIGN KEY (user_id) REFERENCES Users (id);
ALTER TABLE Comments ADD FOREIGN KEY (deal_id) REFERENCES Deals (id);

