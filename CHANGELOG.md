# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.1.0] - 2024-02-17

### Added
- Initial release
- Zod schemas for API contracts
  - `DistillRequestSchema` - validates URL submission requests
  - `DistillResponseSchema` - validates distillation responses
  - `FileListResponseSchema` - validates file list responses
  - `FileDetailResponseSchema` - validates file detail responses
  - `DriveFileSchema` - validates individual file objects
  - `FileListQuerySchema` - validates query parameters for file listing
- TypeScript types inferred from schemas
  - `DistillRequest`, `DistillResponse`
  - `FileListResponse`, `FileDetailResponse`, `DriveFile`
  - `SourceInfo`, `DriveUploadResult`, `FileListQuery`
