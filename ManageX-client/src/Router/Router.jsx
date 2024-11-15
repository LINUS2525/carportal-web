import { createBrowserRouter} from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import CreateJob from "../Pages/CreateJob";
import MyJobs from "../Pages/MyJobs";
import UpdateJob from "../Pages/UpdateJob";
import Login from "../Pages/Login";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
            path: "/",
            element: <Home />
        },
        {
          path: "/post-job",
          element: <CreateJob />
        },
        {
          path: "/my-job",
          element: <PrivateRoute><MyJobs/></PrivateRoute>
        },
        {
          path: "edit-job/:id",
          element: <UpdateJob />,
          loader: ({params}) => fetch(`https://carportal-web.onrender.com/all-jobs/${params.id}`)
        }

      ]
    },
    {
      path: "/login",
      element: <Login />
    }
  ]);

export default router;