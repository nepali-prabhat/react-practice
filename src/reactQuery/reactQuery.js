import React from 'react';
import useReactQuery from './useReactQuery';
import {
    useQuery,
    useMutation,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
} from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

const queryClient = new QueryClient();
export default function ReactQuery() {
    const {} = useReactQuery();
    return (
        <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools position='bottom-right' initialIsOpen={false} />
        </QueryClientProvider>
    );
}
