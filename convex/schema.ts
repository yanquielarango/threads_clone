import { defineSchema, defineTable } from 'convex/server';
import { v } from 'convex/values';

export const User = {
    email: v.string(),
    clerkId: v.string(),
    imageUrl: v.string(),
    first_nme: v.optional(v.string()),
    last_name: v.optional(v.string()),
    username: v.union(v.string(), v.null()),
    bio: v.optional(v.string()),
    location: v.optional(v.string()),
    websiteUrl: v.optional(v.string()),
    followsCount: v.number(),
    pushToken: v.optional(v.string()),
};

export const Message = {
    userId: v.id('users'), // Foreign key to users table
    treadId: v.optional(v.string()),
    content: v.string(),
    likeCount: v.number(), // Default value 0
    commentCount: v.number(), // Default value 0
    retweetCount: v.number(), // Default value 0
    mediaFiles: v.optional(v.array(v.string())), // Array of media file URls
    websiteUrl: v.optional(v.string()), // Optional website URl
};

export default defineSchema({
    users: defineTable(User),
    messages: defineTable(Message),
})