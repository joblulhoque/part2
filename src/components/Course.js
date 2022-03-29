import Header from "./Header";
import Content from "./Content";
const Course = ({course}) => {
    return (
        <div>
            <h1>{course.name}</h1>
            <Header />
            <Content parts={course.parts}/>
        </div>
    )
}
export default Course;