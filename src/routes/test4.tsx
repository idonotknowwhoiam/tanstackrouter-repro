import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/test4")({
    component: RouteComponent,
});

function RouteComponent() {
    return <div>Hello "/test4"!</div>;
}
