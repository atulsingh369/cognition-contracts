import { z } from "zod";

export const DriveFileSchema = z.object({
  id: z.string(),
  name: z.string(),
  createdTime: z.string(),
  modifiedTime: z.string(),
  size: z.number(),
  webViewLink: z.string(),
});

export const FileListResponseSchema = z.object({
  files: z.array(DriveFileSchema),
  nextPageToken: z.string().optional(),
  hasMore: z.boolean(),
});

export const FileDetailResponseSchema = z.object({
  id: z.string(),
  name: z.string(),
  content: z.string(),
  createdTime: z.string(),
  modifiedTime: z.string(),
  webViewLink: z.string(),
});

export const FileListQuerySchema = z.object({
  limit: z.number().int().min(1).max(100).optional().default(50),
  pageToken: z.string().optional(),
});
