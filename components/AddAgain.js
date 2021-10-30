import { useState } from "react";

export default function AddAgain({ onAddAnother }) {
  return (
    <div>
      <button
        onClick={onAddAnother}
        className="bg-pink-300 rounded px-12 py-3 hover:bg-pink-400"
      >
        Add Another Gratitude
      </button>
    </div>
  );
}