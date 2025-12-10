import * as React from "react";
import { Link, Outlet, createRootRoute } from "@tanstack/react-router";
import { ReactNode } from "react";

export const Route = createRootRoute({
    component: RootComponent,
});

function RootComponent() {
    return (
        <>
            <div className="p-2 flex gap-2 text-lg [&_a]:transition-colors duration-300 [&_a]:data-[status=active]:text-white [&_a]:data-[status=active]:bg-blue-500">
                <LinkWrapper href="/">Home</LinkWrapper>
                <LinkWrapper href="/about">About</LinkWrapper>
                <LinkWrapper href="/test">Test</LinkWrapper>
                <LinkWrapper href="/test2">Test2</LinkWrapper>
                <LinkWrapper href="/test3">Test3</LinkWrapper>
                <LinkWrapper href="/test4">Test4</LinkWrapper>
                <LinkWrapper href="/test5">Test5</LinkWrapper>
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
        <Link to={href} className={"bg-white text-black p-3 "}>
            {children}
        </Link>
    );
}
