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
  PreviewRequestSchema,
  PreviewResponseSchema,
  SaveRawRequestSchema,
  SaveRawResponseSchema,
} from "./schemas/index.js";

export type DistillRequest = z.infer<typeof DistillRequestSchema>;
export type DistillResponse = z.infer<typeof DistillResponseSchema>;
export type DriveUploadResult = z.infer<typeof DriveUploadResultSchema>;
export type SourceInfo = z.infer<typeof SourceInfoSchema>;
export type DriveFile = z.infer<typeof DriveFileSchema>;
export type FileListResponse = z.infer<typeof FileListResponseSchema>;
export type FileDetailResponse = z.infer<typeof FileDetailResponseSchema>;
export type FileListQuery = z.infer<typeof FileListQuerySchema>;
export type PreviewRequest = z.infer<typeof PreviewRequestSchema>;
export type PreviewResponse = z.infer<typeof PreviewResponseSchema>;
export type SaveRawRequest = z.infer<typeof SaveRawRequestSchema>;
export type SaveRawResponse = z.infer<typeof SaveRawResponseSchema>;
