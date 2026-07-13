'use client';

import { useRouter, usePathname } from 'next/navigation';

const BackButton = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div> 
        <p>Current Path: {pathname}</p>
        <button onClick={() => router.back()}>Go Back</button>  
    </div>
  )
}

export default BackButton;