import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import '@fontsource/lato';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider } from 'react-router-dom';
import router from './config/router/routes';

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider
        theme={extendTheme({
          fonts: {
            heading: `'Lato', 'sans-serif'`,
            body: `'Lato', 'sans-serif'`,
          },
        })}
      >
        <RouterProvider router={router} />
      </ChakraProvider>
    </QueryClientProvider>
  );
}

export default App;
