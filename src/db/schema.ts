import { boolean, date, integer, pgTable, serial, text, timestamp, varchar } from 'drizzle-orm/pg-core';

export const userSignupTable = pgTable('users_signup', {
  id: serial('id').primaryKey(),
  firstname: text('name').notNull(),
  lastname: text('name').notNull(),
  email: text('email').notNull().unique(),
  dob: date('dob').notNull(),
  password: varchar('password').notNull(),
  confirmpassword: varchar('confirmpassword').notNull(),
});

export const semesterTable = pgTable('semesters', {
    id: serial('id').primaryKey(),
    semester: varchar('semester',{length: 10}).notNull(),
});

export const newStudentsTable = pgTable("students", {
  id: serial('id').primaryKey(),
  fullname: varchar('fullname',{length:25}).notNull(),
  semester: varchar('semester',{length:10}).notNull(),
  contact: varchar('contact',{length:10}).notNull(),
  address: varchar('address',{length:50}).notNull(),
});

export const attendanceTable = pgTable("attendance", {
  id: serial('id').primaryKey(),
  studentId: varchar('studentId',{length:11}).notNull(),
  present: boolean('present').default(false),
  // day: varchar('day',{length:11}).notNull(),
  date: varchar('date',{length:20}).notNull(),
})


export type InsertUser = typeof userSignupTable.$inferInsert;