import { useState } from "react";

export default function VPNModal({ ipAddress, location, closeModal }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6">
        {/* Modal Header */}
        <div className="flex justify-between items-center border-b pb-4 mb-4">
          <h2 className="text-lg font-bold text-gray-800">
            Stay Protected Online
          </h2>
          <button
            onClick={closeModal}
            className="text-gray-400 hover:text-gray-600 text-7xl"
          >
            ×
          </button>
        </div>

        {/* Modal Content */}
        <div className="text-gray-700 mb-4">
          <p className="mb-2">
            Your IP Address is: <strong className="text-red-500">{ipAddress}</strong>
          </p>
          <p className="mb-4">
            Your Location is: <strong className="text-red-500">{location}</strong>
          </p>
          <p className="mb-4">
            Stay protected online by hiding your IP and location. Hire our
            trusted VPN partner to ensure your privacy and security.
          </p>
          <img
            src="https://uploads.sempreupdate.com.br/2024/08/jwej2ZQa-proton-vpn-recurso-icones-discretos-ajudara-usuarios-a-ocultar-aplicativos-em-dispositivos-android-1024x576.webp"
            alt="VPN Illustration"
            className="w-full rounded-lg shadow mb-4"
          />
        </div>

        {/* Action Button */}
        <div className="text-center">
          <a
            href="https://protonvpn.com/pt-br"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-blue-600 text-white font-bold rounded-lg shadow hover:bg-blue-700"
          >
            Protect Now
          </a>
        </div>
      </div>
    </div>
  );
}
