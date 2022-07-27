import { Generic } from "../page/generic/Generic"
import { HomePage } from "../page/Home/Home"
import { PropertiesPage } from "../page/Properties/Properties"

export const navbar = [
  {id:1, title:'Home', path:'/home', element:<HomePage/>   },
  {id:2, title:'Properties', path:'/properties', element:<PropertiesPage/>  },
  {id:3, title:'Contact', path:'/contact', element:<Generic/>  }
]