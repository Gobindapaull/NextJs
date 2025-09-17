import { v } from "convex/values";
import { mutation } from "./_generated/server";

export const syncUser = mutation({
    args: {
        userId: v.string(),
        email: v.string(),
        name: v.string()
    },
    handler: async (cxt, args) => {
        const existingUser = await cxt.db.query("users").filter(q => q.eq(q.field("userId"), args.userId)).first();
        if (!existingUser) {
            await cxt.db.insert("users", {
                userId: args.userId,
                email: args.email,
                name: args.name,
                isPro: false,

            })
        }
    }
});
