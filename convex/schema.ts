import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
    podcasts:defineTable({
        audioStorageId: v.optional(v.id('_storage')),
        user:v.id('users'),
        podcastTitle:v.string(),
        podcastDescription:v.string(),
        audioUrl:v.optional(v.string()),
        imgUrl:v.optional(v.string()),
        imageStorageId:v.optional(v.id('_storage')),
        author:v.string(),
        authorId:v.string(),
        authorImageUrl:v.string(),
        voicePrompts:v.string(),
        imagePrompts:v.string(),
        audioDuration:v.number(),
        views:v.number(),
    })
    .searchIndex('search_author',{searchField:'author'})
    .searchIndex('search_title',{searchField:'podcastTitle'})
    .searchIndex('search_body',{searchField:'podcastDescription'}),
    users:defineTable({
        email:v.string(),
        imageUrl:v.string(),
        clerkId:v.string(),
        name:v.string(),
    })
})