import React, { HTMLAttributes, RefObject } from 'react';
import { cn } from '../utils/cn';
import { cva, VariantProps } from 'class-variance-authority';

export const MainVariants = cva(`h-screen w-screen flex items-center justify-center`, {
  variants: {
    backgroundColor: {
      default: `bg-zinc-200`,
      dark: `bg-zinc-600`,
    },
    textColor: {
      default: `text-zinc-600`,
      dark: `text-zinc-200`,
      point: `text-orange-400`,
    },
  },
});

interface MainFullPageProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof MainVariants> {
  children: React.ReactNode;
  ref?: RefObject<HTMLDivElement>;
}

const MainFullPage: React.FC<MainFullPageProps> = ({
  children,
  ref,
  ...props
}: MainFullPageProps) => {
  return (
    <div
      ref={ref}
      className={cn(MainVariants({ backgroundColor: 'default', textColor: 'default' }))}
      {...props}
    >
      {children}
    </div>
  );
};

export default MainFullPage;
