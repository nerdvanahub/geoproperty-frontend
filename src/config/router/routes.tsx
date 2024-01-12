import { createBrowserRouter } from 'react-router-dom';
import AccountLayout from '../../layout/AccountLayout';
import AddPropertyLayout from '../../layout/AddPropertyLayout';
import HomeLayout from '../../layout/HomeLayout';
import SearchLayout from '../../layout/SearchLayout';
import AboutAddPropertyPage from '../../pages/AboutAddPropertyPage';
import AddContactProperty from '../../pages/AddContactPropertyPage';
import AddImagePropertyPage from '../../pages/AddImagePropertyPage';
import AddPropertyPage from '../../pages/AddPropertyPage';
import DetailAddPropertyPage from '../../pages/DetailAddPropertyPage';
import DetailPage from '../../pages/DetailPage';
import EditAdsPropertyPage from '../../pages/EditAdsPropertyPage';
import HomePage from '../../pages/HomePage';
import ListAdsUserPropertyPage from '../../pages/ListAdsUserPropertyPage';
import SearchPage from '../../pages/SearchPage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
        ],
    },
    {
        path: '/search',
        element: <SearchLayout />,
        children: [
            {
                index: true,
                element: <SearchPage />,
            },
            {
                path: 'detail/:id',
                element: <DetailPage />,
            },
        ],
    },
    {
        path: '/add-property',
        element: <AddPropertyLayout />,
        children: [
            {
                index: true,
                element: <AddPropertyPage />,
            },
            {
                path: 'about-property',
                element: <AboutAddPropertyPage />,
            },
            {
                path: 'detail-property',
                element: <DetailAddPropertyPage />,
            },
            {
                path: 'contact-property',
                element: <AddContactProperty />,
            },
            {
                path: 'image-property',
                element: <AddImagePropertyPage />,
            },
        ],
    },
    {
        path: '/account',
        element: <AccountLayout />,
        children: [
            {
                path: 'list-ads',
                element: <ListAdsUserPropertyPage />,
            },
            {
                path: 'list-ads/:id',
                element: <EditAdsPropertyPage />,
            },
        ],
    },
]);

export default router;
