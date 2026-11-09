#!/usr/bin/env node
// PreToolUse hook. Only active when the session was started with DESIGN_PARTNER=1
// (the design launcher scripts set it). In that mode:
//   - file edits are allowed only inside docs/
//   - shell commands are blocked
// Exit code 2 blocks the tool call and shows the message to Claude.
// Any other session (workers, manager, reviewer) is unaffected.

if (process.env.DESIGN_PARTNER !== "1") process.exit(0);

const path = require("path");
let raw = "";
process.stdin.on("data", (c) => (raw += c));
process.stdin.on("end", () => {
  let input = {};
  try {
    input = JSON.parse(raw || "{}");
  } catch {
    process.exit(0);
  }
  const tool = input.tool_name || "";
  const toolInput = input.tool_input || {};

  if (tool === "Bash" || tool === "PowerShell") {
    console.error("Design partner mode: shell commands are not allowed. Only edit files in docs/.");
    process.exit(2);
  }

  const target = toolInput.file_path || toolInput.notebook_path;
  if (!target) process.exit(0);

  const root = process.env.CLAUDE_PROJECT_DIR || input.cwd || process.cwd();
  const docs = path.resolve(root, "docs");
  const abs = path.resolve(root, target);
  const rel = path.relative(docs, abs);
  const insideDocs = rel === "" || (!rel.startsWith("..") && !path.isAbsolute(rel));
  const isClaudeMd = abs === path.resolve(root, "CLAUDE.md");

  if (!insideDocs && !isClaudeMd) {
    console.error(`Design partner mode: you may only edit files inside docs/ and CLAUDE.md. Blocked: ${target}`);
    process.exit(2);
  }
  process.exit(0);
});
