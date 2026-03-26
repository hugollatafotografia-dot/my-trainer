export type ChatRole = "user" | "assistant";

export type ChatMessage = {
  id: string;
  role: ChatRole;
  content: string;
  createdAt: number;
};

export type ChatApiRequest = {
  messages: Array<Pick<ChatMessage, "role" | "content">>;
  locale?: string;
};

export type ChatApiResponse = {
  reply: string;
};
