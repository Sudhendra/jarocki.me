import React, { PropsWithChildren, ReactNode, MouseEventHandler } from 'react';

type Heading = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface TitleProps {
  as?: Heading;
  action?: ReactNode;
  children?: ReactNode;
  onClick?: MouseEventHandler<HTMLHeadingElement>;
  className?: string; // Add the className prop
}

const Title = ({ as: TitleComponent = 'h1', action, children, onClick, className }: TitleProps) => {
  return (
    <header className="mt-16 flex flex-row items-center justify-between">
      <TitleComponent className={`text-xl font-bold leading-none tracking-tight ${className || ''}`} onClick={onClick}>
        {children}
      </TitleComponent>
      {action}
    </header>
  );
};

const Content = ({ children }: PropsWithChildren) => {
  return <div className="mt-4 text-base text-wrap">{children}</div>;
};

const SectionRoot = ({ children }: PropsWithChildren) => {
  return <section className="text-wrap">{children}</section>;
};

export const Section = Object.assign(SectionRoot, { Title, Content });
