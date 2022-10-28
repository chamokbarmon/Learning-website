import { useLoaderData } from "react-router";
import Cards from "./Cards";



const Courses = () => {
    const program = useLoaderData()
   
    console.log(program)
    return (
      program.map(pro=><Cards key={pro.id} pro={pro}></Cards>)
    
    )
    
            
 
};

export default Courses;