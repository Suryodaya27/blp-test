CREATE TABLE "contactsInfluencer" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL,
	"location" varchar(255) NOT NULL,
	"phone" varchar(50) NOT NULL,
	"category" json NOT NULL,
	"social_media" json NOT NULL,
	"metadata" json,
	"created_at" timestamp DEFAULT now() NOT NULL
);
