'use client'

import { PasswordResetForm } from '@/components/settings/PasswordResetForm'

export default function SettingsPage() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 w-full">
      
      {/* Reset Password */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Change Password</h2>
        <PasswordResetForm disabled={true} />
      </div>
    </div>
  );
}