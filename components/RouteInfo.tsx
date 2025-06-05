'use client';

import { usePathname, useRouter } from 'next/navigation';

export default function RouteInfo() {
  const pathname = usePathname();
  const router = useRouter();
  console.log(router)
  return (
    <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
      <h2 className="text-lg font-bold mb-2">当前路由信息：</h2>
      <p>当前路径: {pathname}</p>
    </div>
  );
} 