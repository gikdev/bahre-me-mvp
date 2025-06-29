import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

export const Route = createRootRoute({
  component: () => (
    <div className='min-h-dvh p-5 max-w-120 mx-auto'>
      <Outlet />
      <TanStackRouterDevtools />
    </div>
  ),
})
