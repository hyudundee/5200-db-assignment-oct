const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("newNewsFeed.sqlite3");

const query = `BEGIN TRANSACTION;
CREATE TABLE IF NOT EXISTS "User" (
	"userID"	INTEGER NOT NULL UNIQUE,
	"name"	TEXT NOT NULL,
	"email"	TEXT,
	"createDate"	TEXT NOT NULL,
	PRIMARY KEY("userID" AUTOINCREMENT)
);
CREATE TABLE IF NOT EXISTS "NewsFeed" (
	"feedID"	INTEGER NOT NULL UNIQUE,
	"userID"	INTEGER NOT NULL,
	"message"	TEXT NOT NULL,
	"Date"	TEXT NOT NULL,
	PRIMARY KEY("feedID" AUTOINCREMENT)
);
CREATE TABLE IF NOT EXISTS "JoinUserFriends" (
	"ID"	INTEGER NOT NULL UNIQUE,
	"fromUser"	INTEGER NOT NULL,
	"toUser"	INTEGER NOT NULL,
	"createDate"	TEXT NOT NULL,
	PRIMARY KEY("ID" AUTOINCREMENT),
	FOREIGN KEY("fromUser") REFERENCES "User"("userID"),
	FOREIGN KEY("toUser") REFERENCES "User"("userID")
);
INSERT INTO "User" VALUES (1,'Budha','budha@gmail.com','2020-10-01');
INSERT INTO "User" VALUES (2,'Bob','Bob@gmail.com','2020-10-01');
INSERT INTO "User" VALUES (3,'Alice','Alice@gmail.com','2001-10-20');
INSERT INTO "User" VALUES (4,'Catherine','catherine@gmail.com','2004-03-24');
INSERT INTO "NewsFeed" VALUES (1,0,'','');
INSERT INTO "NewsFeed" VALUES (2,2,'Time to take a rest!','2020-10-07');
INSERT INTO "NewsFeed" VALUES (3,2,'What a sunny day','2020-12-03');
INSERT INTO "NewsFeed" VALUES (4,3,'Hey I am Bob nice to join this db','2020-10-09');
INSERT INTO "NewsFeed" VALUES (5,0,'','');
INSERT INTO "JoinUserFriends" VALUES (1,1,2,'2020-10-03');
INSERT INTO "JoinUserFriends" VALUES (2,3,2,'2020-10-05');
INSERT INTO "JoinUserFriends" VALUES (3,2,3,'2020-10-05');
COMMIT;
`
