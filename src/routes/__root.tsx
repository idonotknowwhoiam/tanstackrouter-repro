import * as React from 'react';
import { Link, Outlet, createRootRoute } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import { ReactNode } from 'react';

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <>
      <div className="p-2 flex gap-2 text-lg">
        <LinkWrapper href="/">Home</LinkWrapper>
        <LinkWrapper href="/about">About</LinkWrapper>
      </div>
      <hr />
      <Outlet />
    </>
  );
}

function LinkWrapper({
  children,
  href,
}: {
  children: ReactNode;
  href: string;
}) {
  return (
    <Link
      to={href}
      className={
        'bg-white text-black p-3 transition-colors duration-300 data-[status=active]:text-white data-[status=active]:bg-blue-500'
      }
    >
      {children}
    </Link>
  );
}
