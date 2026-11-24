import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { RouterProvider } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
import router from './router/router'

const queryClient = new QueryClient()

document.addEventListener('DOMContentLoaded', () => {
  createRoot(document.getElementById('app') as HTMLElement).render(
    <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} /> 
        <Analytics />
        <ReactQueryDevtools />
    </QueryClientProvider>
  )
})
