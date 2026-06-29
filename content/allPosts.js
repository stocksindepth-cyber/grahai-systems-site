// Single feed for the blog: engineering-authority articles first (the content
// that attracts CTOs), then the earlier marketing posts.
import { engineeringPosts } from "./engineeringPosts";
import { blogPosts as legacyPosts } from "./posts";

export const allPosts = [...engineeringPosts, ...legacyPosts];
