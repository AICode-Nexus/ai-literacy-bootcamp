# Claude Code Skills 实战专题教程 Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Create a standalone tutorial teaching non-technical users to use and write Claude Code Skills, integrated into the existing AI Literacy Bootcamp VitePress site.

**Architecture:** Single Markdown file (`docs/lessons/skill-workshop.md`) following existing lesson patterns, plus VitePress config updates for navigation, and a cross-reference from lesson-5. Course content uses the same structure as existing lessons (emoji headers, mermaid diagrams, code blocks, tables).

**Tech Stack:** VitePress, Markdown, Mermaid diagrams

---

## File Structure

| File | Action | Responsibility |
|------|--------|----------------|
| `docs/lessons/skill-workshop.md` | Create | Main tutorial content (all 6 sections) |
| `docs/.vitepress/config.mts` | Modify (lines 63-69) | Add "实战专题" sidebar group |
| `docs/courses.md` | Modify (after line 99) | Add "实战专题" card section |
| `docs/lessons/lesson-5.md` | Modify (line 329) | Add cross-reference to skill workshop |

---

## Chunk 1: Tutorial Content

### Task 1: Create the tutorial file with header and Section 1

**Files:**
- Create: `docs/lessons/skill-workshop.md`

- [ ] **Step 1: Create the file with frontmatter, overview, and Section 1 (概念引入)**

Write the complete tutorial content for the header and Section 1 following the spec's content outline. The content should include:
- Course title, metadata (时长 3 小时, 难度 进阶, 风格 实操为主)
- Overview box (核心观点, 你将学到, 你将带走)
- Opening hook: a relatable scenario showing the pain of repeating prompts
- Core analogy: Skill = 菜谱, Claude Code = 厨师
- What is Claude Code (one sentence)
- What is a Skill (one sentence + pain points it solves)
- Comparison table: Skill vs 普通提示词 (5 dimensions from spec)
- Mermaid diagram showing the learning path of this tutorial

Full content is authored during implementation following the spec at `docs/superpowers/specs/2026-05-07-claude-code-skills-tutorial-design.md`.

- [ ] **Step 2: Verify the file renders correctly**

Run: `cd /Users/admin/work/ai-literacy-bootcamp && npx vitepress dev docs --port 5174`

Open browser at `http://localhost:5174/ai-literacy-bootcamp/lessons/skill-workshop` and verify:
- Title renders
- Overview box displays
- Section 1 content shows with table and mermaid diagram

- [ ] **Step 3: Commit**

```bash
git add docs/lessons/skill-workshop.md
git commit -m "docs: 添加 Skills 实战专题 - Section 1 概念引入"
```

---

### Task 2: Add Section 2 (体验现成 Skill)

**Files:**
- Modify: `docs/lessons/skill-workshop.md`

- [ ] **Step 1: Append Section 2 content**

Section 2 covers: prerequisites, hands-on steps to experience pre-built Skills, troubleshooting.

Key content:
- Installation check instructions
- Practice pack download concept
- Step-by-step: place files in `.claude/skills/`, invoke with `/meeting-notes`, `/content-rewrite`, `/daily-summary`
- Observation prompts: what was input? what was output?
- Troubleshooting table for common issues

- [ ] **Step 2: Verify renders correctly in browser**

- [ ] **Step 3: Commit**

```bash
git add docs/lessons/skill-workshop.md
git commit -m "docs: 添加 Skills 实战专题 - Section 2 体验现成 Skill"
```

---

### Task 3: Add Section 3 (解剖一个 Skill)

**Files:**
- Modify: `docs/lessons/skill-workshop.md`

- [ ] **Step 1: Append Section 3 content**

Section 3 covers: Skill file anatomy using the "会议纪要整理" example from the spec.

Key content:
- ASCII structure diagram showing all 6 parts
- Complete example Skill file (meeting-notes.md) in a code block
- Field-by-field explanation table
- File location explanation (global vs project)
- Naming convention (filename → slash command)
- Hands-on: open the example file, annotate each section

- [ ] **Step 2: Verify renders correctly in browser**

- [ ] **Step 3: Commit**

```bash
git add docs/lessons/skill-workshop.md
git commit -m "docs: 添加 Skills 实战专题 - Section 3 解剖一个 Skill"
```

---

### Task 4: Add Section 4 (改造现成 Skill)

**Files:**
- Modify: `docs/lessons/skill-workshop.md`

- [ ] **Step 1: Append Section 4 content**

Section 4 covers: progressive modification exercises.

Key content:
- Step 1: Change output format (table → list)
- Step 2: Add a workflow step (priority assessment)
- Step 3: Modify trigger keywords
- Each step shows before/after comparison
- Troubleshooting for common modification issues
- Emphasis on "change one thing, test, repeat" cycle

- [ ] **Step 2: Verify renders correctly in browser**

- [ ] **Step 3: Commit**

```bash
git add docs/lessons/skill-workshop.md
git commit -m "docs: 添加 Skills 实战专题 - Section 4 改造现成 Skill"
```

---

### Task 5: Add Section 5 (从零创建 Skill)

**Files:**
- Modify: `docs/lessons/skill-workshop.md`

- [ ] **Step 1: Append Section 5 content**

Section 5 covers: creating a Skill from scratch with 3 selectable templates.

Key content:
- 3 complete fill-in templates (周报生成, 会议纪要整理, 内容改写)
- 7-step unified process with time budgets
- Each template in a fenced code block with `[placeholder]` markers
- Troubleshooting for creation issues
- Success criteria: 3 consecutive stable outputs

- [ ] **Step 2: Verify renders correctly in browser**

- [ ] **Step 3: Commit**

```bash
git add docs/lessons/skill-workshop.md
git commit -m "docs: 添加 Skills 实战专题 - Section 5 从零创建 Skill"
```

---

### Task 6: Add Section 6 (测试迭代与分享) and appendix resources

**Files:**
- Modify: `docs/lessons/skill-workshop.md`

- [ ] **Step 1: Append Section 6 and resources content**

Section 6 covers: debugging, iteration, sharing, and next steps.

Key content:
- Debugging checklist (recognition issues, output issues, constraint issues)
- Iteration method: change one variable at a time
- Sharing methods (file, git, community)
- Advanced preview (cross-Skill references, MCP, conditional logic)
- Quick reference card (inline, printable format)
- 10 Skill ideas list with difficulty ratings
- FAQ section

- [ ] **Step 2: Verify full tutorial renders correctly end-to-end**

- [ ] **Step 3: Commit**

```bash
git add docs/lessons/skill-workshop.md
git commit -m "docs: 添加 Skills 实战专题 - Section 6 测试迭代与分享 + 附录资源"
```

---

## Chunk 2: Site Integration

### Task 7: Add sidebar navigation entry

**Files:**
- Modify: `docs/.vitepress/config.mts` (lines 63-69, after "阶段四：安全与治理" block)

- [ ] **Step 1: Add "实战专题" sidebar group**

Insert a new sidebar group between the closing `}` of "阶段四" (line 69) and the closing `],` of the sidebar array (line 70). Add a comma after line 69's `}`:

```typescript
      {
        text: '阶段四：安全与治理',
        items: [
          { text: '第 7 课：AI 协作与安全', link: '/lessons/lesson-7' }
        ]
      },
      {
        text: '实战专题',
        items: [
          { text: 'Claude Code Skills', link: '/lessons/skill-workshop' }
        ]
      }
```

Note: The "阶段四" block already has no trailing comma (line 69). Add one, then add the new block before the `],` that closes the sidebar array.

- [ ] **Step 2: Verify sidebar shows in browser**

Run dev server, check that "实战专题" group appears in sidebar with the link working.

- [ ] **Step 3: Commit**

```bash
git add docs/.vitepress/config.mts
git commit -m "docs: 在侧边栏添加实战专题导航"
```

---

### Task 8: Add course card to courses.md

**Files:**
- Modify: `docs/courses.md` (after line 99, before the "学习建议" section)

- [ ] **Step 1: Add "实战专题" section with LessonCard**

Insert between the closing `</div>` (line 99) and the `---` separator (line 101), i.e., on a new line 100:

```markdown
## 🔧 实战专题

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 1.5rem; margin: 2rem 0;">

<LessonCard
  lessonNumber="专题"
  title="Claude Code Skills"
  description="打造你的 AI 专属工作流：从使用到编写自定义 Skill，零代码基础也能上手。"
  duration="3 小时"
  difficulty="进阶"
  link="/lessons/skill-workshop"
/>

</div>
```

- [ ] **Step 2: Verify card renders on courses page**

- [ ] **Step 3: Commit**

```bash
git add docs/courses.md
git commit -m "docs: 在课程列表添加 Skills 实战专题卡片"
```

---

### Task 9: Add cross-reference from lesson-5

**Files:**
- Modify: `docs/lessons/lesson-5.md` (after line 329, end of file)

- [ ] **Step 1: Append cross-reference block**

Add at the end of the file:

```markdown

---

## 🚀 想要更深度的自动化？

本课介绍的工具适合"应用之间的连接"。如果你想让 AI 助手本身变得更智能——按你定义的流程、格式和风格工作——可以试试：

👉 [实战专题：Claude Code Skills — 打造你的 AI 专属工作流](/lessons/skill-workshop)

零代码基础即可上手，3 小时学会编写自定义 AI 工作指令。
```

- [ ] **Step 2: Verify link works from lesson-5 page**

- [ ] **Step 3: Commit**

```bash
git add docs/lessons/lesson-5.md
git commit -m "docs: 在第 5 课末尾添加 Skills 专题引导链接"
```

---

### Task 10: Final verification

- [ ] **Step 1: Run VitePress build to check for dead links**

```bash
cd /Users/admin/work/ai-literacy-bootcamp && npx vitepress build docs
```

Expected: Build succeeds with no dead link errors.

- [ ] **Step 2: Verify all navigation paths work**

Check in browser:
1. Sidebar "实战专题" → skill-workshop page loads
2. Courses page card → skill-workshop page loads
3. Lesson-5 bottom link → skill-workshop page loads
4. All internal anchors in skill-workshop work

- [ ] **Step 3: Final commit if any fixes needed**

```bash
git add -A
git commit -m "docs: 修复 Skills 专题集成问题"
```
