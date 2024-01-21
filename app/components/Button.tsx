import { cn } from '../utils/cn';
import { cva, VariantProps } from 'class-variance-authority';
import { ButtonHTMLAttributes, FC } from 'react';

export const ButtonVariants = cva(
  //모든 경우에 공통으로 들어갈 CSS
  `
  flex justify-center items-center active:scale-95 rounded-xl 
  text-sm font-bold text-slate-100 transition-all shadow-md
  hover:scale-105 duration-200 active:scale-100
  `,
  {
    //variants , size에 따라 다른 디자인을 보여줄수 있다
    variants: {
      variant: {
        default: '',
        white: 'bg-white text-black',
        black: ' bg-black text-white',
        red: 'bg-red-400',
      },
      size: {
        default: '',
        rounded: 'w-[2rem] h-[2rem] rounded-full',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    //Button의 속성을 타입지정을 통해 손쉽게 사용
    VariantProps<typeof ButtonVariants> {
  label?: string;
  //라벨은 단지 string을 넣을때 사용
  children?: React.ReactElement;
  //icon component 같은 리엑트 컴포넌트에 사용
  additionalClass?: string | boolean;
  //추가 className
}

/**
 * @variant 색상 지정 ex) gray, blue, red
 * @size 사이즈 지정 md, lg, wlg
 * @children ReactElement 아이콘같은걸 넣어준다
 * @label String을 넣어 버튼 라벨을 지정해준다
 * @additionalClass 추가할 클래스 속성을 넣어준다
 * @props 추가할 버튼 속성을 넣어준다
 */
const Button: FC<ButtonProps> = ({ variant, size, children, label, additionalClass, ...props }) => {
  return (
    <button className={cn(ButtonVariants({ variant, size }), additionalClass)} {...props}>
      {children && children}
      {label && label}
    </button>
  );
};

export default Button;
