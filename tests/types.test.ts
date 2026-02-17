import { describe, it, expect } from "vitest";
import type {
  DistillRequest,
  DistillResponse,
  DriveFile,
  FileListResponse,
  FileDetailResponse,
} from "../src/index.js";

describe("Type exports", () => {
  it("DistillRequest type is usable", () => {
    const request: DistillRequest = {
      url: "https://example.com/article",
    };
    expect(request.url).toBe("https://example.com/article");
  });

  it("DistillResponse type is usable", () => {
    const response: DistillResponse = {
      filename: "2024-02-article.md",
      slug: "article",
      markdown: "# Article",
      source: {
        title: "Article",
        author: null,
        url: "https://example.com/article",
      },
      drive: {
        uploaded: true,
        id: "abc123",
        name: "article.md",
        webViewLink: "https://drive.google.com/file/d/abc123",
      },
    };
    expect(response.filename).toBe("2024-02-article.md");
  });

  it("DriveFile type is usable", () => {
    const file: DriveFile = {
      id: "abc123",
      name: "article.md",
      createdTime: "2024-02-15T10:00:00.000Z",
      modifiedTime: "2024-02-15T12:00:00.000Z",
      size: 1024,
      webViewLink: "https://drive.google.com/file/d/abc123",
    };
    expect(file.id).toBe("abc123");
  });

  it("FileListResponse type is usable", () => {
    const list: FileListResponse = {
      files: [],
      hasMore: false,
    };
    expect(list.files).toEqual([]);
  });

  it("FileDetailResponse type is usable", () => {
    const detail: FileDetailResponse = {
      id: "abc123",
      name: "article.md",
      content: "# Article\n\nContent",
      createdTime: "2024-02-15T10:00:00.000Z",
      modifiedTime: "2024-02-15T12:00:00.000Z",
      webViewLink: "https://drive.google.com/file/d/abc123",
    };
    expect(detail.content).toBe("# Article\n\nContent");
  });
});
