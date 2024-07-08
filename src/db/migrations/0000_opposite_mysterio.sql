CREATE TABLE IF NOT EXISTS "students" (
	"id" serial PRIMARY KEY NOT NULL,
	"fullname" varchar(25) NOT NULL,
	"semester" varchar(10) NOT NULL,
	"contact" varchar(10) NOT NULL,
	"address" varchar(50) NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "semesters" (
	"id" serial PRIMARY KEY NOT NULL,
	"semester" varchar(10) NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "users_signup" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"email" text NOT NULL,
	"dob" date NOT NULL,
	"password" varchar NOT NULL,
	"confirmpassword" varchar NOT NULL,
	CONSTRAINT "users_signup_email_unique" UNIQUE("email")
);
