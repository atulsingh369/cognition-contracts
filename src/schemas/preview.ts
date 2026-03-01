import { z } from "zod";

export const PreviewRequestSchema = z.object({
  url: z.string().url("Invalid URL format"),
});

export const PreviewResponseSchema = z.object({
  title: z.string(),
  author: z.string().nullable(),
  publishedDate: z.string().nullable(),
  content: z.string(),
  estimatedReadTime: z.number(),
});

export const SaveRawRequestSchema = z.object({
  url: z.string().url("Invalid URL format"),
});

export const SaveRawResponseSchema = z.object({
  id: z.string(),
  title: z.string(),
});
