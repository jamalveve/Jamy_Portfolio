// components/MaintenanceModal.jsx
import { useState } from 'react';

export default function MaintenanceModal() {
  const [showModal, setShowModal] = useState(true);

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-xl p-6 max-w-md w-full text-center">
        <h2 className="text-xl font-semibold mb-4">⚙️ Portfolio Under Maintenance</h2>
        <p className="text-gray-700 mb-6">
          I'm currently working on some updates. You can still view the portfolio though!
        </p>
        <button
          onClick={() => setShowModal(false)}
          className="px-6 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
        >
          Click to View
        </button>
      </div>
    </div>
  );
}
