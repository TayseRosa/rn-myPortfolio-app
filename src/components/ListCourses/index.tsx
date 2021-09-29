import React from 'react';

import{
    Container,
    CourseDate,
    Course,
    CourseText
} from './styles';

export default function ListCourses({ data }){
    return(
        <Container>
            <CourseDate> { data.date } - { data.office } </CourseDate>
            <Course> { data.company } 
                <CourseText> { data.experience }</CourseText>
            </Course>
        </Container>
    )
}
