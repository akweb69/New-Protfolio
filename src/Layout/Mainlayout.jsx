import React from 'react';
import Nav from '../Common/Nav';
import { Outlet } from 'react-router-dom';
import Footer from '../Common/Footer';

// tanstack query import the all dependencis--->
import {
    useQuery,
    useMutation,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'
// create tanstack query--->
//  Create a client
const queryClient = new QueryClient()
const Mainlayout = () => {
    return (
        <>
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    );
};

export default Mainlayout;