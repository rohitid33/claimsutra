import type { Express } from "express";
import { createServer } from "http";
import { storage } from "./storage";
import { insertComplaintSchema } from "@shared/schema";
import { setupAuth } from "./auth";

export async function registerRoutes(app: Express) {
  // Setup authentication routes and middleware
  setupAuth(app);

  app.post("/api/complaints", async (req, res) => {
    if (!req.isAuthenticated()) {
      return res.status(401).json({ message: "Please login to submit a complaint" });
    }

    try {
      const complaintData = insertComplaintSchema.parse(req.body);
      const complaint = await storage.createComplaint({
        ...complaintData,
        userId: req.user.id,
      });
      res.json(complaint);
    } catch (error) {
      res.status(400).json({ error: "Invalid complaint data" });
    }
  });

  app.get("/api/blog-posts", async (_req, res) => {
    const posts = await storage.getBlogPosts();
    res.json(posts);
  });

  return createServer(app);
}