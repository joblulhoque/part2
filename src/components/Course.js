
import Content from "./Content";
import Header from "./Header";
const Course = ({courses}) => {
    return (
        <div>
            <Header/>
            {courses.map(course=>(<div>
                <h2 key={course.id}>{course.name}</h2>
                <Content parts={course.parts}/>
                </div>))}
        </div>
    )
}
export default Course;