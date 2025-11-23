import { pgTable, serial, text, timestamp, varchar, json } from 'drizzle-orm/pg-core';

// Contact form submissions table
export const contactsBrand = pgTable('contactsBrand', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  email: varchar('email', { length: 255 }).notNull(),
  company: varchar('company', { length: 255 }).notNull(),
  phone: varchar('phone', { length: 50 }).notNull(),
  service: varchar('service', { length: 100 }).notNull(),
  message: text('message'),
  metadata: json('metadata'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

export const contactsInfluencer = pgTable('contactsInfluencer', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  location: varchar('location', { length: 255 }).notNull(),
  phone: varchar('phone', { length: 50 }).notNull(),
  category: json('category').notNull(), // array of categories
  socialMedia: json('social_media').notNull(),
  email: varchar('email', { length: 255 }).notNull(),
  metadata: json('metadata'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

// Export types for TypeScript
export type ContactBrand = typeof contactsBrand.$inferSelect;
export type NewContactBrand = typeof contactsBrand.$inferInsert;
export type ContactInfluencer = typeof contactsInfluencer.$inferSelect;
export type NewContactInfluencer = typeof contactsInfluencer.$inferInsert;