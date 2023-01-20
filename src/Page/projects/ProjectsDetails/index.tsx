import React from 'react'
import { useContext } from 'react'
import { Context } from '../../../Context/ProjectsApi'
import { stockData } from '../stockData'
import { DetailsCard } from './DetailsCard'
import { Wrapper } from './Wrapper'

export const ProjectsDetails = React.memo(() => {

    const { ProjectIndex, IsPageActive } = useContext(Context)

    return (
        <Wrapper display={IsPageActive ? "flex" : "none"}>
            <DetailsCard
                key={stockData[ProjectIndex].Name}
                projectIndex={`0${(ProjectIndex + 1).toString()}`}
                header={stockData[ProjectIndex].Name}
                Skills={stockData[ProjectIndex].platform}
                description={stockData[ProjectIndex].description}
            />
        </Wrapper>
    )
})
