import { type Complaint, type InsertComplaint, type BlogPost, type InsertBlogPost, type User, type InsertUser } from "@shared/schema";
import session from "express-session";
import createMemoryStore from "memorystore";

const MemoryStore = createMemoryStore(session);

export interface IStorage {
  createComplaint(complaint: InsertComplaint): Promise<Complaint>;
  getComplaints(): Promise<Complaint[]>;
  getBlogPosts(): Promise<BlogPost[]>;
  createBlogPost(post: InsertBlogPost): Promise<BlogPost>;

  // User-related operations
  createUser(user: InsertUser): Promise<User>;
  getUser(id: number): Promise<User>;
  getUserByUsername(username: string): Promise<User | null>;

  // Session store
  sessionStore: session.Store;
}

export class MemStorage implements IStorage {
  private complaints: Map<number, Complaint>;
  private blogPosts: Map<number, BlogPost>;
  private users: Map<number, User>;
  private complaintId: number;
  private blogPostId: number;
  private userId: number;
  sessionStore: session.Store;

  constructor() {
    this.complaints = new Map();
    this.blogPosts = new Map();
    this.users = new Map();
    this.complaintId = 1;
    this.blogPostId = 1;
    this.userId = 1;
    this.sessionStore = new MemoryStore({
      checkPeriod: 86400000, // Prune expired entries every 24h
    });

    // Add mock blog posts
    this.createBlogPost({
      title: "Understanding Life Insurance Claims",
      content: "Life insurance claims can be complex...",
      imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
    });
    this.createBlogPost({
      title: "Health Insurance Policies Explained",
      content: "Navigate the complexities of health insurance...",
      imageUrl: "https://images.unsplash.com/photo-1558898268-92ae44e7670e",
    });
  }

  async createComplaint(insertComplaint: InsertComplaint): Promise<Complaint> {
    const id = this.complaintId++;
    const complaint: Complaint = {
      ...insertComplaint,
      id,
      userId: 1, // Default user ID for now
      createdAt: new Date(),
    };
    this.complaints.set(id, complaint);
    return complaint;
  }

  async getComplaints(): Promise<Complaint[]> {
    return Array.from(this.complaints.values());
  }

  async getBlogPosts(): Promise<BlogPost[]> {
    return Array.from(this.blogPosts.values());
  }

  async createBlogPost(insertPost: InsertBlogPost): Promise<BlogPost> {
    const id = this.blogPostId++;
    const post: BlogPost = {
      ...insertPost,
      id,
      createdAt: new Date(),
    };
    this.blogPosts.set(id, post);
    return post;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userId++;
    const user: User = {
      ...insertUser,
      id,
      createdAt: new Date(),
    };
    this.users.set(id, user);
    return user;
  }

  async getUser(id: number): Promise<User> {
    const user = this.users.get(id);
    if (!user) {
      throw new Error("User not found");
    }
    return user;
  }

  async getUserByUsername(username: string): Promise<User | null> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username
    ) || null;
  }
}

export const storage = new MemStorage();