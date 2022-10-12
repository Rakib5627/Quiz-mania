import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layouts/Main';
import Home from './components/Home/Home';
import Topics from './components/Topics/Topics';
import Blogs from './components/Blogs/Blogs';
import Quizes from './components/Quizes/Quizes';
import Statistics from './components/Statistics/Statistics';

function App() {
    
    const router =createBrowserRouter ([
      {
        path:'/',
        element:<Main></Main>,
        children : [
          {
            path : '/',
            loader : async()=>{ 
             return fetch('https://openapi.programming-hero.com/api/quiz');
          },
            element : <Home></Home>
          },
          {
            path: '/topics',
            loader : async()=>{ 
              return fetch('https://openapi.programming-hero.com/api/quiz');
           },
            element: <Topics></Topics>
          },
          {
            path: '/:id',
            loader  : async(params) =>{
              return fetch ('https://openapi.programming-hero.com/api/quiz/1')
            },
            element : <Quizes></Quizes>
          },
          {
            path:'/statistics',
            loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
            element:<Statistics></Statistics>
            
          },
          {
            path:'blogs',
            element:<Blogs></Blogs>
          }
        ]
      },
      {
        path:'*',element: <div className='p-5 m-5'><h2 className='p-5 text-danger'>Not Found! 404 </h2></div>
      }

    ])

  return (
    <div className="App">
      <RouterProvider router ={router}></RouterProvider>
    </div>
  );
}

export default App;
