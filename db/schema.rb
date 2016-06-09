# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160608012744) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "authentications", force: :cascade do |t|
    t.string   "provider",   null: false
    t.string   "user_id",    null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string   "uid",        null: false
  end

  create_table "categories", force: :cascade do |t|
    t.string   "title"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "feed_items", force: :cascade do |t|
    t.string   "title",                           null: false
    t.integer  "feed_source_id",                  null: false
    t.datetime "created_at",                      null: false
    t.datetime "updated_at",                      null: false
    t.string   "author"
    t.string   "url"
    t.datetime "published"
    t.datetime "updated"
    t.text     "summary"
    t.text     "content"
    t.boolean  "saved_for_later", default: false
    t.boolean  "unread",          default: true
  end

  create_table "feed_sources", force: :cascade do |t|
    t.string   "title",                                null: false
    t.string   "url",                                  null: false
    t.datetime "created_at",                           null: false
    t.datetime "updated_at",                           null: false
    t.string   "category",   default: "uncategorized"
  end

  add_index "feed_sources", ["url"], name: "index_feed_sources_on_url", unique: true, using: :btree

  create_table "user_feed_sources", force: :cascade do |t|
    t.integer  "user_id",        null: false
    t.integer  "feed_source_id", null: false
    t.datetime "created_at",     null: false
    t.datetime "updated_at",     null: false
  end

  add_index "user_feed_sources", ["feed_source_id"], name: "index_user_feed_sources_on_feed_source_id", using: :btree
  add_index "user_feed_sources", ["user_id", "feed_source_id"], name: "index_user_feed_sources_on_user_id_and_feed_source_id", unique: true, using: :btree
  add_index "user_feed_sources", ["user_id"], name: "index_user_feed_sources_on_user_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "username",        null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.string   "avatar_url"
  end

  add_index "users", ["session_token"], name: "index_users_on_session_token", unique: true, using: :btree
  add_index "users", ["username"], name: "index_users_on_username", unique: true, using: :btree

end
