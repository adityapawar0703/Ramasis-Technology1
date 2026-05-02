import React, { createContext, useCallback, useContext, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CheckCircle2, AlertCircle, X } from 'lucide-react';

const ToastCtx = createContext(null);

let externalPush = null;

export function useToast() {
  const ctx = useContext(ToastCtx);
  return (
    ctx || {
      success: (m) => externalPush && externalPush({ type: 'success', message: m }),
      error: (m) => externalPush && externalPush({ type: 'error', message: m }),
    }
  );
}

export default function ToastHost() {
  const [items, setItems] = useState([]);

  const push = useCallback((toast) => {
    const id = Math.random().toString(36).slice(2);
    setItems((prev) => [...prev, { ...toast, id }]);
    setTimeout(() => setItems((prev) => prev.filter((t) => t.id !== id)), 4500);
  }, []);

  externalPush = push;

  return (
    <ToastCtx.Provider value={{ success: (m) => push({ type: 'success', message: m }), error: (m) => push({ type: 'error', message: m }) }}>
      <div className="fixed bottom-6 right-6 z-[100] flex flex-col gap-2 w-[360px] max-w-[90vw]" data-testid="toast-host">
        <AnimatePresence>
          {items.map((t) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, x: 60 }}
              className={`glass border-l-4 px-4 py-3 flex items-start gap-3 ${
                t.type === 'success' ? 'border-l-signal' : 'border-l-red-500'
              }`}
              data-testid={`toast-${t.type}`}
            >
              {t.type === 'success' ? (
                <CheckCircle2 className="text-signal mt-0.5" size={18} />
              ) : (
                <AlertCircle className="text-red-500 mt-0.5" size={18} />
              )}
              <p className="flex-1 text-sm">{t.message}</p>
              <button
                onClick={() => setItems((p) => p.filter((x) => x.id !== t.id))}
                aria-label="Dismiss"
                className="text-muted hover:text-signal"
              >
                <X size={14} />
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </ToastCtx.Provider>
  );
}
