import { z } from "zod";

export const DistillRequestSchema = z.object({
  url: z.string().url("Invalid URL format"),
});

export const DriveUploadResultSchema = z.object({
  uploaded: z.boolean(),
  id: z.string().optional(),
  name: z.string().optional(),
  webViewLink: z.string().optional(),
  error: z.string().optional(),
});

export const SourceInfoSchema = z.object({
  title: z.string(),
  author: z.string().nullable(),
  url: z.string(),
});

export const DistillResponseSchema = z.object({
  filename: z.string(),
  slug: z.string(),
  markdown: z.string(),
  source: SourceInfoSchema,
  drive: DriveUploadResultSchema,
});
