import { z } from "zod";
import {
  DistillRequestSchema,
  DistillResponseSchema,
  DriveUploadResultSchema,
  SourceInfoSchema,
  DriveFileSchema,
  FileListResponseSchema,
  FileDetailResponseSchema,
  FileListQuerySchema,
} from "./schemas/index.js";

export type DistillRequest = z.infer<typeof DistillRequestSchema>;
export type DistillResponse = z.infer<typeof DistillResponseSchema>;
export type DriveUploadResult = z.infer<typeof DriveUploadResultSchema>;
export type SourceInfo = z.infer<typeof SourceInfoSchema>;
export type DriveFile = z.infer<typeof DriveFileSchema>;
export type FileListResponse = z.infer<typeof FileListResponseSchema>;
export type FileDetailResponse = z.infer<typeof FileDetailResponseSchema>;
export type FileListQuery = z.infer<typeof FileListQuerySchema>;
