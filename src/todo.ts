export type Todo = {
  id: string;
  title: string;
  completed: boolean;
  createdAt: string;
  completedAt: string | null;
};

export const TITLE_MAX_LENGTH = 200;

export type ValidationError = { reason: string };

/** REQ-2: タイトルは 1 文字以上 200 文字以下 */
export function validateTitle(title: unknown): ValidationError | null {
  if (typeof title !== "string" || title.trim().length === 0) {
    return { reason: "title is required" };
  }
  if (title.length > TITLE_MAX_LENGTH) {
    return { reason: `title must be at most ${TITLE_MAX_LENGTH} characters` };
  }
  return null;
}
