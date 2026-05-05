// SECURITY NOTE: This upload endpoint has no authentication.
// Add authentication (e.g., NextAuth, Clerk, or HTTP Basic Auth) before
// exposing this route in production. It should not be publicly linked.

import { writeFile } from "fs/promises";
import { join } from "path";

// Simple server action for headshot upload
async function uploadHeadshot(formData: FormData): Promise<void> {
  "use server";
  const file = formData.get("headshot") as File | null;
  if (!file || file.size === 0) return;
  if (!file.type.startsWith("image/")) return;
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);
  const dest = join(process.cwd(), "public", "headshot.jpg");
  await writeFile(dest, buffer);
}

export default function AdminUploadPage() {
  return (
    <html lang="en">
      <head>
        <title>Admin — Headshot Upload</title>
      </head>
      <body style={{ fontFamily: "monospace", padding: "2rem", background: "#fff" }}>
        <h1>Headshot Upload</h1>
        <p>
          Upload a new headshot image. This will overwrite{" "}
          <code>/public/headshot.jpg</code> on the server.
        </p>
        <p style={{ color: "red", fontWeight: "bold" }}>
          WARNING: This page has no authentication. Secure it before going to
          production.
        </p>
        <form action={uploadHeadshot} method="POST" encType="multipart/form-data">
          <div style={{ marginBottom: "1rem" }}>
            <label htmlFor="headshot">
              <strong>Select image file (JPG recommended):</strong>
            </label>
            <br />
            <input
              id="headshot"
              name="headshot"
              type="file"
              accept="image/*"
              required
              style={{ marginTop: "0.5rem" }}
            />
          </div>
          <button type="submit" style={{ padding: "0.5rem 1rem" }}>
            Upload &amp; Replace Headshot
          </button>
        </form>
        <hr style={{ margin: "2rem 0" }} />
        <h2>Manual alternative</h2>
        <p>
          Drop your <code>headshot.jpg</code> directly into the{" "}
          <code>/public/</code> directory, then redeploy.
        </p>
      </body>
    </html>
  );
}
