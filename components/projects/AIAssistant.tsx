"use client";

import { useState } from "react";
import { Send } from "lucide-react";

const QUICK_ACTIONS = ["View Progress", "Task Schedule", "Files", "Urgent Items"];

export function AIAssistant({ projectTitle }: { projectTitle: string }) {
  type Message = { role: "assistant" | "user"; content: string };
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: `Hi! I can help you with the ${projectTitle} project. I have information about files, tasks, and team members.`,
    },
  ]);
  const [input, setInput] = useState("");

  const send = (text = input.trim()) => {
    if (!text) return;
    setMessages((prev) => [
      ...prev,
      { role: "user" as "user", content: text },
      {
        role: "assistant" as "assistant",
        content: `I'll look into "${text}" for you. You can check task status, file listings, and team assignments in the sections below.`,
      },
    ]);
    setInput("");
  };

  return (
    <div
      className="rounded-xl border p-5 flex flex-col"
      style={{ backgroundColor: "var(--surface)", borderColor: "var(--border)" }}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-400" />
          <span className="text-xs font-semibold" style={{ color: "var(--text-1)" }}>
            AI Assistant
          </span>
        </div>
        <span className="text-xs" style={{ color: "var(--text-3)" }}>
          claude-sonnet
        </span>
      </div>

      {/* Messages */}
      <div className="space-y-2 mb-4 max-h-44 overflow-y-auto">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`text-xs p-3 rounded-lg leading-relaxed ${msg.role === "user" ? "ml-4" : ""}`}
            style={
              msg.role === "assistant"
                ? { backgroundColor: "var(--overlay-sm)", color: "var(--text-2)" }
                : { backgroundColor: "rgba(59,130,246,0.15)", color: "#93c5fd" }
            }
          >
            {msg.content}
          </div>
        ))}
      </div>

      {/* Quick actions */}
      <div className="grid grid-cols-2 gap-2 mb-3">
        {QUICK_ACTIONS.map((action) => (
          <button
            key={action}
            onClick={() => send(action)}
            className="px-3 py-2 rounded-lg text-xs text-center transition-colors hover:text-blue-500"
            style={{ backgroundColor: "var(--overlay-sm)", color: "var(--text-2)" }}
          >
            {action}
          </button>
        ))}
      </div>

      {/* Input */}
      <div className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && send()}
          placeholder="Ask a question..."
          className="flex-1 rounded-lg px-3 py-2 text-xs outline-none transition-colors border"
          style={{
            backgroundColor: "var(--overlay-sm)",
            borderColor: "var(--border)",
            color: "var(--text-1)",
          }}
        />
        <button
          onClick={() => send()}
          className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center hover:bg-blue-700 transition-colors flex-shrink-0"
        >
          <Send size={12} className="text-white" />
        </button>
      </div>
    </div>
  );
}
