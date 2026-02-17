import { describe, it, expect } from "vitest";
import {
  DistillRequestSchema,
  DistillResponseSchema,
  DriveFileSchema,
  FileListResponseSchema,
  FileDetailResponseSchema,
  FileListQuerySchema,
} from "../src/schemas/index.js";

describe("DistillRequestSchema", () => {
  it("accepts valid URL", () => {
    const result = DistillRequestSchema.safeParse({
      url: "https://example.com/article",
    });
    expect(result.success).toBe(true);
  });

  it("rejects missing URL", () => {
    const result = DistillRequestSchema.safeParse({});
    expect(result.success).toBe(false);
  });

  it("rejects invalid URL format", () => {
    const result = DistillRequestSchema.safeParse({ url: "not-a-url" });
    expect(result.success).toBe(false);
  });

  it("accepts http URLs", () => {
    const result = DistillRequestSchema.safeParse({
      url: "http://example.com/article",
    });
    expect(result.success).toBe(true);
  });
});

describe("DistillResponseSchema", () => {
  const validResponse = {
    filename: "2024-02-test-article.md",
    slug: "test-article",
    markdown: "# Test Article\n\nContent here.",
    source: {
      title: "Test Article",
      author: "John Doe",
      url: "https://example.com/article",
    },
    drive: {
      uploaded: true,
      id: "abc123",
      name: "2024-02-test-article.md",
      webViewLink: "https://drive.google.com/file/d/abc123",
    },
  };

  it("accepts valid response", () => {
    const result = DistillResponseSchema.safeParse(validResponse);
    expect(result.success).toBe(true);
  });

  it("accepts null author", () => {
    const result = DistillResponseSchema.safeParse({
      ...validResponse,
      source: { ...validResponse.source, author: null },
    });
    expect(result.success).toBe(true);
  });

  it("accepts failed drive upload", () => {
    const result = DistillResponseSchema.safeParse({
      ...validResponse,
      drive: { uploaded: false, error: "Upload failed" },
    });
    expect(result.success).toBe(true);
  });

  it("rejects missing required fields", () => {
    const result = DistillResponseSchema.safeParse({
      filename: "test.md",
    });
    expect(result.success).toBe(false);
  });
});

describe("DriveFileSchema", () => {
  const validFile = {
    id: "abc123",
    name: "2024-02-article.md",
    createdTime: "2024-02-15T10:00:00.000Z",
    modifiedTime: "2024-02-15T12:00:00.000Z",
    size: 1024,
    webViewLink: "https://drive.google.com/file/d/abc123",
  };

  it("accepts valid file", () => {
    const result = DriveFileSchema.safeParse(validFile);
    expect(result.success).toBe(true);
  });

  it("rejects missing fields", () => {
    const result = DriveFileSchema.safeParse({ id: "abc123" });
    expect(result.success).toBe(false);
  });
});

describe("FileListResponseSchema", () => {
  it("accepts valid response with files", () => {
    const result = FileListResponseSchema.safeParse({
      files: [
        {
          id: "abc123",
          name: "article.md",
          createdTime: "2024-02-15T10:00:00.000Z",
          modifiedTime: "2024-02-15T12:00:00.000Z",
          size: 1024,
          webViewLink: "https://drive.google.com/file/d/abc123",
        },
      ],
      hasMore: false,
    });
    expect(result.success).toBe(true);
  });

  it("accepts empty files array", () => {
    const result = FileListResponseSchema.safeParse({
      files: [],
      hasMore: false,
    });
    expect(result.success).toBe(true);
  });

  it("accepts pagination token", () => {
    const result = FileListResponseSchema.safeParse({
      files: [],
      nextPageToken: "token123",
      hasMore: true,
    });
    expect(result.success).toBe(true);
  });
});

describe("FileDetailResponseSchema", () => {
  it("accepts valid response", () => {
    const result = FileDetailResponseSchema.safeParse({
      id: "abc123",
      name: "article.md",
      content: "# Article\n\nContent here.",
      createdTime: "2024-02-15T10:00:00.000Z",
      modifiedTime: "2024-02-15T12:00:00.000Z",
      webViewLink: "https://drive.google.com/file/d/abc123",
    });
    expect(result.success).toBe(true);
  });

  it("rejects missing content", () => {
    const result = FileDetailResponseSchema.safeParse({
      id: "abc123",
      name: "article.md",
    });
    expect(result.success).toBe(false);
  });
});

describe("FileListQuerySchema", () => {
  it("uses default limit", () => {
    const result = FileListQuerySchema.parse({});
    expect(result.limit).toBe(50);
  });

  it("accepts valid limit", () => {
    const result = FileListQuerySchema.safeParse({ limit: 100 });
    expect(result.success).toBe(true);
  });

  it("rejects limit below 1", () => {
    const result = FileListQuerySchema.safeParse({ limit: 0 });
    expect(result.success).toBe(false);
  });

  it("rejects limit above 100", () => {
    const result = FileListQuerySchema.safeParse({ limit: 200 });
    expect(result.success).toBe(false);
  });

  it("accepts pageToken", () => {
    const result = FileListQuerySchema.safeParse({
      limit: 50,
      pageToken: "token123",
    });
    expect(result.success).toBe(true);
  });
});
