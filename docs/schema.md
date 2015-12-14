# Schema Information

## User
column name        | data type | details
-------------------|-----------|-----------------------
id                 | integer   | not null, primary key
username           | string    | not null, indexed, unique
password_digest    | text      | not null
session_token      | integer   | not null, indexed, unique

## FeedSource
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
url         | string    | not null
must_read   | boolean   | not null
category_id | integer   | not null

## UserFeedSources
column name | data type | details
-------------------|-----------|-----------------------
id                 | integer   | not null, primary key
user_id            | integer   | not null, indexed, unique
feed_source_id     | integer   | not null, indexed, unique

## FeedItem
column name | data type | details
-----------------|-----------|-----------------------
id               | integer   | not null, primary key
title            | string    |
date             | date      | not null
content          | text      |
feed_source_id      | integer   |

## FeedCategory
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null
