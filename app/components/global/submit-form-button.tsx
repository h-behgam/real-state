'use client';
import { cn } from '@/app/utils/utils'; 
import { useFormStatus } from 'react-dom';

export default function SubmitFormButton({
  classname,
  children,
  onClick,
}: {
  // classname?: React.CSSProperties;
  classname?: string;
  onClick?: () => void;
  children: React.ReactNode;
}) {
  const { pending } = useFormStatus();

  return (
    <div className='mb-3'>
      <button
        type='submit'
        disabled={pending}
        onClick={onClick ? onClick : undefined}
        className={cn(
          'rounded-lg bg-second_color px-7 py-2 text-white duration-300 hover:bg-hover_color disabled:bg-gray-400',
          classname,
        )}
      >
        {children}
      </button>
    </div>
  );
}