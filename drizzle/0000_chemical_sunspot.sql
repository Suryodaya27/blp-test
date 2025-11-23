CREATE TABLE "contacts" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL,
	"email" varchar(255) NOT NULL,
	"company" varchar(255) NOT NULL,
	"phone" varchar(50) NOT NULL,
	"service" varchar(100) NOT NULL,
	"message" text,
	"created_at" timestamp DEFAULT now() NOT NULL
);
