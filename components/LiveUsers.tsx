"use client";

import { useEffect, useState, useRef } from "react";
import { supabase } from "@/lib/supabaseClient";
import { v4 as uuidv4 } from "uuid";

export default function LiveUsers() {
  const [onlineUsers, setOnlineUsers] = useState<string[]>([]);
  const sessionId = useRef(uuidv4()).current; // stable ID for session

  useEffect(() => {
    const channel = supabase.channel("live-analytics", {
      config: {
        presence: {
          key: sessionId,
        },
      },
    });

    channel
      .on("presence", { event: "sync" }, () => {
        const state = channel.presenceState();
        const users = Object.keys(state);
        setOnlineUsers(users);
      })
      .subscribe(async (status) => {
        if (status === "SUBSCRIBED") {
          try {
            await channel.track({
              joined_at: new Date().toISOString(),
            });
          } catch (err) {
            console.error("Presence track error:", err);
          }
        }
      });

    return () => {
      channel.unsubscribe();
    };
  }, [sessionId]);

  return (
    <div className="fixed top-4 right-4 z-50">
      {/* Live Users Button */}
      <div className="flex items-center space-x-2 px-3 py-2 bg-white dark:bg-slate-800 rounded-full shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300">
        <div className="relative">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <div className="absolute inset-0 w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
        </div>
        <span className="text-sm font-semibold text-slate-800 dark:text-slate-100">
          {onlineUsers.length}
        </span>
      </div>
    </div>
  );
}
