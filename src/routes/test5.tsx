import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/test5")({
    component: RouteComponent,
});

function RouteComponent() {
    return <div>Hello "/test5"!</div>;
}
